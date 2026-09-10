"use client";

import type { ReactNode } from "react";
import { AdminShell } from "@/features/admin/components/AdminShell";
import { AdminProvider } from "@/features/admin/admin-context";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProvider>
      <AdminShell>{children}</AdminShell>
    </AdminProvider>
  );
}
