"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LanguageProvider } from "@/lib/language";
import { MediKioskHeader } from "@/features/landing/components/MediKioskHeader";
import { HeroExperience } from "@/features/landing/components/HeroExperience";
import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { SpeakSection } from "@/features/landing/components/SpeakSection";
import { BuiltForIndia } from "@/features/landing/components/BuiltForIndia";
import { AyushSection } from "@/features/landing/components/AyushSection";
import { WordsToStructure } from "@/features/landing/components/WordsToStructure";
import { DocumentsSection } from "@/features/landing/components/DocumentsSection";
import { ClinicianHandoff } from "@/features/landing/components/ClinicianHandoff";
import { TrustSection } from "@/features/landing/components/TrustSection";
import { EcosystemSection } from "@/features/landing/components/EcosystemSection";
import { AccessibilitySection } from "@/features/landing/components/AccessibilitySection";
import { AudienceSection } from "@/features/landing/components/AudienceSection";
import { SystemWorkflow } from "@/features/landing/components/SystemWorkflow";
import { BuiltWithCare } from "@/features/landing/components/BuiltWithCare";
import { FinalCta } from "@/features/landing/components/FinalCta";
import { HelpCard } from "@/features/landing/components/HelpCard";
import { SiteFooter } from "@/features/landing/components/SiteFooter";
import { HelpModal } from "@/features/landing/components/HelpModal";

export default function HomePage() {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  );
}

function LandingContent() {
  const router = useRouter();
  const [helpOpen, setHelpOpen] = useState(false);
  const start = () => router.push("/patient-kiosk");

  return (
    <div className="min-h-dvh pb-[env(safe-area-inset-bottom)]">
      <MediKioskHeader />

      <main id="main-content" tabIndex={-1}>
        <HeroExperience onStart={start} />
        <HowItWorks />
        <SpeakSection />
        <BuiltForIndia />
        <AyushSection />
        <WordsToStructure />
        <DocumentsSection />
        <ClinicianHandoff />
        <TrustSection />
        <EcosystemSection />
        <AccessibilitySection />
        <AudienceSection />
        <SystemWorkflow />
        <BuiltWithCare />
        <FinalCta onStart={start} />
        <HelpCard onOpen={() => setHelpOpen(true)} />
      </main>

      <SiteFooter onHelp={() => setHelpOpen(true)} />

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
