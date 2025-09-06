import type { ReactNode } from "react";
import Layout from "@/components/Layout";

export default function ShellLayout({ children }: { children: ReactNode }) {
    return <Layout>{children}</Layout>;
}

