"use client";

import type { ReactNode } from "react";
import { ClinicianProvider } from "@/features/clinician/clinician-context";
import { ClinicianShell } from "@/features/clinician/components/ClinicianShell";

export default function ClinicianLayout({ children }: { children: ReactNode }) {
  return (
    <ClinicianProvider>
      <ClinicianShell>{children}</ClinicianShell>
    </ClinicianProvider>
  );
}
