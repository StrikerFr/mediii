"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import {
  PatientSectionPage,
  type PatientSection,
} from "@/features/patient/components/pages/PatientSectionPage";

const VALID_SECTIONS: PatientSection[] = [
  "timeline",
  "reports",
  "documents",
  "intakes",
  "consents",
  "profile",
  "notifications",
];

export default function DynamicPatientSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const resolvedParams = use(params);
  const section = resolvedParams.section as PatientSection;

  if (!VALID_SECTIONS.includes(section)) {
    notFound();
  }

  return <PatientSectionPage section={section} />;
}
