"use client";

import type { ReactNode } from "react";
import { PatientProvider } from "@/features/patient/patient-context";
import { PatientShell } from "@/features/patient/components/PatientShell";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <PatientProvider>
      <PatientShell>{children}</PatientShell>
    </PatientProvider>
  );
}
