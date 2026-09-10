/**
 * English strings for the Patient Kiosk. This file is the source of truth for
 * the key set — every other locale must implement the same keys.
 */
export const en = {
  "kiosk.status": "Patient check-in",
  "kiosk.brand": "MediKiosk",
  "kiosk.language.label": "Language",
  "kiosk.language.hindi": "हिन्दी",
  "kiosk.language.english": "English",

  "kiosk.a11y.button": "Accessibility",
  "kiosk.a11y.title": "Make it easier to read",
  "kiosk.a11y.textSize": "Text size",
  "kiosk.a11y.smaller": "Smaller text",
  "kiosk.a11y.bigger": "Bigger text",
  "kiosk.a11y.contrast": "Higher contrast",
  "kiosk.a11y.motion": "Reduce movement",
  "kiosk.a11y.reset": "Reset",

  "kiosk.help.button": "Need help?",
  "kiosk.help.title": "Need help?",
  "kiosk.help.body": "Please ask a staff member nearby. They can help you continue.",
  "kiosk.help.close": "Close",

  "kiosk.welcome.eyebrow": "MediKiosk",
  "kiosk.welcome.heading": "Welcome to MediKiosk",
  "kiosk.welcome.support": "We’ll ask a few simple questions before your consultation.",
  "kiosk.welcome.start": "Start",
  "kiosk.welcome.speakHint": "You can answer by speaking.",
  "kiosk.welcome.typeHint": "You do not need to type anything.",
  "kiosk.welcome.begin": "Let’s begin",
  "kiosk.welcome.imageAlt":
    "A patient speaking to a MediKiosk screen in a calm hospital waiting area",

  "kiosk.trust.privacy.title": "Handled with care",
  "kiosk.trust.privacy.body":
    "Your information is handled carefully and shared with your clinician.",
  "kiosk.trust.guided.title": "Simple guided steps",
  "kiosk.trust.guided.body": "One question at a time, in your language.",
  "kiosk.trust.staff.title": "Staff can help",
  "kiosk.trust.staff.body": "Ask a staff member nearby at any time.",

  "kiosk.progress.label": "Your progress",
  "kiosk.progress.step": "Step {current} of {total}",

  "kiosk.state.loading": "One moment…",
  "kiosk.state.error.title": "Something went wrong",
  "kiosk.state.error.body": "Please ask a staff member to help you continue.",
  "kiosk.state.error.retry": "Try again",
  "kiosk.state.offline.title": "No connection right now",
  "kiosk.state.offline.body": "You can keep going. Your answers stay on this kiosk.",
  "kiosk.state.unsynced": "Saved on this kiosk — not sent yet",
  "kiosk.state.empty": "Nothing here yet",

  "kiosk.stub.title": "This step is coming next",
  "kiosk.stub.body": "This part of the check-in is not built yet.",
  "kiosk.stub.back": "Go back",

  "kiosk.step.welcome": "Welcome",
  "kiosk.step.consent": "Consent",
  "kiosk.step.identification": "Your details",
  "kiosk.step.introduction": "How it works",
  "kiosk.step.caseTaking": "Tell us more",
  "kiosk.step.confirm": "Confirm",
  "kiosk.step.questions": "A few questions",
  "kiosk.step.vitals": "Quick facts",
  "kiosk.step.documents": "Documents",
  "kiosk.step.processing": "Preparing",
  "kiosk.step.review": "Review",
  "kiosk.step.complete": "Done",
} as const;

export type KioskTranslationKey = keyof typeof en;
