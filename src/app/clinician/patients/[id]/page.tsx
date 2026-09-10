"use client";

import { use } from "react";
import { PatientCasePage } from "@/features/clinician/components/pages/PatientCasePage";

export default function ClinicianPatientCaseRoute({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  return <PatientCasePage patientId={resolvedParams.id} />;
}
