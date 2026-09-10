"use client";

import type { ReactNode } from "react";
import { OperationsShell } from "@/features/operations/components/OperationsShell";
import { OperationsProvider } from "@/features/operations/operations-context";

export default function OperationsLayout({ children }: { children: ReactNode }) {
  return (
    <OperationsProvider>
      <OperationsShell>{children}</OperationsShell>
    </OperationsProvider>
  );
}
