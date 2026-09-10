"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { KioskStepPlaceholder } from "@/features/patient-kiosk/components/pages/KioskStepPlaceholder";
import type { KioskStepId } from "@/features/patient-kiosk/session";

const VALID_STEPS: KioskStepId[] = [
  "consent",
  "identification",
  "introduction",
  "case-taking",
  "confirm",
  "questions",
  "vitals",
  "documents",
  "processing",
  "review",
  "complete",
];

export default function PatientKioskStepPage({ params }: { params: Promise<{ step: string }> }) {
  const resolvedParams = use(params);
  const stepId = resolvedParams.step as KioskStepId;

  if (!VALID_STEPS.includes(stepId)) {
    notFound();
  }

  return <KioskStepPlaceholder stepId={stepId} />;
}
