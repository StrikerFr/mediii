"use client";

import type { ReactNode } from "react";
import { KioskProvider } from "@/features/patient-kiosk/kiosk-context";
import { KioskShell } from "@/features/patient-kiosk/components/KioskShell";

export default function PatientKioskLayout({ children }: { children: ReactNode }) {
  return (
    <KioskProvider>
      <KioskShell>{children}</KioskShell>
    </KioskProvider>
  );
}
