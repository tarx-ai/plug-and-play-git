// Lightweight, swappable MCP client wrapper.
// You can swap this with your real MCP client implementation.
// The interface stays tiny: listTools() and callTool(name, args).

export type McpToolDef = {
  name: string;
  description?: string;
  // Zod json schema would be ideal; keep any for now
  parameters?: Record<string, any>;
};

export type McpToolResult =
  | { type: "text"; text: string }
  | { type: "json"; data: any }
  | { type: "table"; columns: string[]; rows: any[][] }
  | { type: "error"; message: string };

export interface McpClient {
  listTools(): Promise<McpToolDef[]>;
  callTool(name: string, args?: any): Promise<McpToolResult>;
}

// --- Demo client (replace with real MCP wire-up) -----------------
class DemoMcp implements McpClient {
  private tools: McpToolDef[] = [
    { name: "supabase.schema", description: "Get DB schema" },
    { name: "supabase.sql", description: "Run SQL", parameters: { sql: "string" } },
    { name: "apollo.introspect", description: "GraphQL schema introspection" },
    { name: "github.repos", description: "List GitHub repositories" },
    { name: "github.issues", description: "Get GitHub issues", parameters: { repo: "string", state: "string" } },
    { name: "file.read", description: "Read file contents", parameters: { path: "string" } },
    { name: "file.list", description: "List directory contents", parameters: { path: "string" } },
  ];

  async listTools() { return this.tools; }

  async callTool(name: string, args?: any): Promise<McpToolResult> {
    try {
      switch (name) {
        case "supabase.schema":
          return { 
            type: "table", 
            columns: ["table", "columns"], 
            rows: [
              ["users", "id,email,created_at,updated_at"],
              ["posts", "id,title,body,author_id,created_at"],
              ["comments", "id,post_id,user_id,content,created_at"],
              ["workspaces", "id,name,description,owner_id,created_at"]
            ] 
          };
        case "supabase.sql":
          return { 
            type: "json", 
            data: { 
              rows: [
                { id: 1, title: "Welcome to TARX", body: "This is a sample post", author_id: 1, created_at: "2024-01-01T00:00:00Z" },
                { id: 2, title: "Getting Started", body: "Learn how to use the platform", author_id: 1, created_at: "2024-01-02T00:00:00Z" }
              ], 
              rowCount: 2, 
              sql: args?.sql ?? "" 
            } 
          };
        case "apollo.introspect":
          return { 
            type: "text", 
            text: `type Query {
  hello: String
  users: [User]
  posts: [Post]
}

type User {
  id: ID!
  email: String!
  name: String
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  body: String!
  author: User!
  comments: [Comment]
}` 
          };
        case "github.repos":
          return {
            type: "table",
            columns: ["name", "description", "stars", "language"],
            rows: [
              ["tarx-ai/plug-and-play-git", "TARX React project", "0", "TypeScript"],
              ["tarx-ai/tarx-core", "Core TARX platform", "42", "Rust"],
              ["tarx-ai/tarx-docs", "Documentation site", "12", "Markdown"]
            ]
          };
        case "github.issues":
          return {
            type: "json",
            data: {
              issues: [
                { number: 1, title: "Add MCP tool integration", state: "open", labels: ["enhancement"] },
                { number: 2, title: "Fix dashboard styling", state: "closed", labels: ["bug"] }
              ],
              repo: args?.repo || "tarx-ai/plug-and-play-git"
            }
          };
        case "file.read":
          return {
            type: "text",
            text: `File: ${args?.path || "unknown"}\n\nThis is a sample file content. In a real implementation, this would read the actual file from the filesystem.`
          };
        case "file.list":
          return {
            type: "table",
            columns: ["name", "type", "size"],
            rows: [
              ["app", "directory", "-"],
              ["components", "directory", "-"],
              ["lib", "directory", "-"],
              ["package.json", "file", "2.1KB"],
              ["README.md", "file", "1.5KB"]
            ]
          };
        default:
          return { type: "error", message: `Unknown tool: ${name}` };
      }
    } catch (e: any) {
      return { type: "error", message: e?.message ?? "Tool failed" };
    }
  }
}

let _client: McpClient | null = null;
export function getMcpClient(): McpClient {
  if (_client) return _client;
  // TODO: build a real client from env (e.g., TARX_MCP_SERVERS JSON)
  _client = new DemoMcp();
  return _client;
}
