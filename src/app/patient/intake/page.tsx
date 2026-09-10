"use client";

import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { VoiceVisual } from "@/features/landing/components/VoiceVisual";

export default function LegacyIntakeRoute() {
  return (
    <LanguageProvider>
      <IntakePlaceholder />
    </LanguageProvider>
  );
}

function IntakePlaceholder() {
  const { hi, en } = useLanguage();

  return (
    <main className="grid min-h-dvh place-items-center px-6 py-16 text-center">
      <div className="flex max-w-2xl flex-col items-center">
        <VoiceVisual state="listening" className="size-56 sm:size-72" />
        <h1 className="mt-14 text-3xl font-semibold sm:text-4xl">
          {hi && <span className="deva block">हम सुन रहे हैं।</span>}
          {en && (
            <span className={hi ? "mt-3 block text-xl text-muted-foreground" : "block"}>
              We&rsquo;re listening.
            </span>
          )}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          {hi && <span className="deva block text-foreground">यह हिस्सा जल्द तैयार होगा।</span>}
          {en && <span className="mt-2 block">This part is coming soon.</span>}
        </p>
        <Link
          href="/"
          className="mt-12 inline-flex min-h-16 items-center rounded-full border border-border bg-surface px-10 text-xl font-semibold transition-colors hover:bg-muted"
        >
          {hi && <span className="deva">वापस जाएं</span>}
          {hi && en && (
            <span aria-hidden="true" className="px-2 opacity-50">
              /
            </span>
          )}
          {en && <span>Go back</span>}
        </Link>
      </div>
    </main>
  );
}
