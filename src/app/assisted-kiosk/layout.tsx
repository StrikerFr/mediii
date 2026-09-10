"use client";

import type { ReactNode } from "react";
import { AssistedShell } from "@/features/assisted-kiosk/components/AssistedShell";
import { AssistedKioskProvider } from "@/features/assisted-kiosk/assisted-kiosk-context";

export default function AssistedKioskLayout({ children }: { children: ReactNode }) {
  return (
    <AssistedKioskProvider>
      <AssistedShell>{children}</AssistedShell>
    </AssistedKioskProvider>
  );
}
