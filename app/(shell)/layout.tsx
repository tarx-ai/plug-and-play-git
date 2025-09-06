'use client';

import Layout from '@/components/Layout';

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}