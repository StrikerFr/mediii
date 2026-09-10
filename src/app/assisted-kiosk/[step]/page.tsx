"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import {
  AssistedPlaceholderPage,
  type AssistedPlaceholderKind,
} from "@/features/assisted-kiosk/components/pages/AssistedPlaceholderPage";

const VALID_KINDS: AssistedPlaceholderKind[] = [
  "start",
  "case-taking",
  "vitals",
  "documents",
  "handoff",
];

export default function DynamicAssistedStepPage({ params }: { params: Promise<{ step: string }> }) {
  const resolvedParams = use(params);
  const step = resolvedParams.step as AssistedPlaceholderKind;

  if (!VALID_KINDS.includes(step)) {
    notFound();
  }

  return <AssistedPlaceholderPage kind={step} />;
}
