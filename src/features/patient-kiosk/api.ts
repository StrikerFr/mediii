import {
  KIOSK_TOTAL_STEPS,
  stepNumber,
  type KioskLanguage,
  type KioskStepId,
  type PatientKioskSession,
} from "./session";

/**
 * Adapter layer between kiosk UI and whatever serves session state.
 *
 * Today every call resolves from in-memory mock data. When the real service
 * exists, only this file changes — components keep the same calls.
 */

let current: PatientKioskSession | null = null;

function newSessionId() {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `demo-${random}`;
}

function blankSession(language: KioskLanguage): PatientKioskSession {
  return {
    sessionId: newSessionId(),
    language,
    currentStep: "welcome",
    patientStatus: "unidentified",
    consentStatus: "pending",
    patientType: "unknown",
    answers: {},
    documents: [],
    vitals: {},
    syncStatus: "local",
    completed: false,
  };
}

export type KioskProgress = {
  currentStep: KioskStepId;
  currentIndex: number;
  totalSteps: number;
};

export const patientKioskApi = {
  async startSession(language: KioskLanguage = "hi"): Promise<PatientKioskSession> {
    current = blankSession(language);
    return current;
  },

  async getSession(): Promise<PatientKioskSession | null> {
    return current;
  },

  async updateLanguage(language: KioskLanguage): Promise<PatientKioskSession> {
    current = { ...(current ?? blankSession(language)), language };
    return current;
  },

  async setStep(step: KioskStepId): Promise<PatientKioskSession> {
    current = { ...(current ?? blankSession("hi")), currentStep: step };
    return current;
  },

  async getProgress(): Promise<KioskProgress> {
    const step = current?.currentStep ?? "welcome";
    return {
      currentStep: step,
      currentIndex: stepNumber(step),
      totalSteps: KIOSK_TOTAL_STEPS,
    };
  },
};
