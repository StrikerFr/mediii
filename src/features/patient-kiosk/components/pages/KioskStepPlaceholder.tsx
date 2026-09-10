import Link from "next/link";
import { useKiosk } from "@/features/patient-kiosk/kiosk-context";
import { KioskStepContainer } from "../KioskStepContainer";
import { KioskText } from "../KioskText";
import { KIOSK_STEPS, type KioskStepId } from "@/features/patient-kiosk/session";
import { cn } from "@/lib/utils";

/**
 * Honest placeholder for journey steps that are not built yet. It never fakes
 * a working step — it simply names the step and offers a way back.
 */
export function KioskStepPlaceholder({ stepId }: { stepId: KioskStepId }) {
  const { tIn, language, t } = useKiosk();
  const index = KIOSK_STEPS.findIndex((s) => s.id === stepId);
  const step = KIOSK_STEPS[index];

  return (
    <KioskStepContainer step={index + 1}>
      <div className="mx-auto max-w-2xl rounded-4xl border border-border bg-surface px-8 py-14 text-center">
        <h1 className={cn("text-3xl font-semibold sm:text-4xl", language === "hi" && "deva")}>
          {step ? tIn(language, step.labelKey) : ""}
        </h1>
        <KioskText
          tkey="kiosk.stub.title"
          as="p"
          className="mt-6 text-xl font-semibold"
          secondaryClassName="text-lg"
        />
        <KioskText
          tkey="kiosk.stub.body"
          as="p"
          className="mt-4 text-lg leading-relaxed text-muted-foreground"
        />
        <Link
          href="/patient-kiosk"
          className="mt-10 inline-flex min-h-16 items-center rounded-full border border-border bg-background px-10 text-xl font-semibold transition-colors hover:bg-muted"
        >
          <span className={language === "hi" ? "deva" : undefined}>{t("kiosk.stub.back")}</span>
        </Link>
      </div>
    </KioskStepContainer>
  );
}
