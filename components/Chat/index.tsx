"use client";

import { useState } from "react";

interface ChatProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Chat({ title, children }: ChatProps) {
  const [message, setMessage] = useState("");

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">{title || "Chat"}</h3>
      <div className="space-y-4">
        {children && (
          <div className="space-y-2">
            {children}
          </div>
        )}
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
          <p className="text-sm">Welcome to TARX Chat!</p>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
