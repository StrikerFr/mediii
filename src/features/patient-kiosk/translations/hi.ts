import type { KioskTranslationKey } from "./en";

/** Hindi strings for the Patient Kiosk. Must cover every key in en.ts. */
export const hi: Record<KioskTranslationKey, string> = {
  "kiosk.status": "मरीज़ चेक-इन",
  "kiosk.brand": "मेडीकियोस्क",
  "kiosk.language.label": "भाषा",
  "kiosk.language.hindi": "हिन्दी",
  "kiosk.language.english": "English",

  "kiosk.a11y.button": "पढ़ने में आसानी",
  "kiosk.a11y.title": "पढ़ने में आसान बनाएँ",
  "kiosk.a11y.textSize": "अक्षरों का आकार",
  "kiosk.a11y.smaller": "छोटे अक्षर",
  "kiosk.a11y.bigger": "बड़े अक्षर",
  "kiosk.a11y.contrast": "ज़्यादा साफ़ रंग",
  "kiosk.a11y.motion": "हलचल कम करें",
  "kiosk.a11y.reset": "पहले जैसा",

  "kiosk.help.button": "मदद चाहिए?",
  "kiosk.help.title": "मदद चाहिए?",
  "kiosk.help.body": "पास में मौजूद staff member से मदद माँगें। वे आपको आगे बढ़ने में मदद करेंगे।",
  "kiosk.help.close": "बंद करें",

  "kiosk.welcome.eyebrow": "मेडीकियोस्क",
  "kiosk.welcome.heading": "मेडीकियोस्क में आपका स्वागत है",
  "kiosk.welcome.support": "आपकी consultation से पहले हम आपसे कुछ आसान सवाल पूछेंगे।",
  "kiosk.welcome.start": "शुरू करें",
  "kiosk.welcome.speakHint": "आप बोलकर जवाब दे सकते हैं।",
  "kiosk.welcome.typeHint": "आपको टाइप करने की ज़रूरत नहीं है।",
  "kiosk.welcome.begin": "चलिए शुरू करें",
  "kiosk.welcome.imageAlt":
    "अस्पताल के शांत प्रतीक्षा क्षेत्र में एक मरीज़ मेडीकियोस्क स्क्रीन से बात कर रहा है",

  "kiosk.trust.privacy.title": "सावधानी से संभाली जाती है",
  "kiosk.trust.privacy.body":
    "आपकी जानकारी सावधानी से संभाली जाती है और आपके डॉक्टर तक पहुँचती है।",
  "kiosk.trust.guided.title": "आसान कदम",
  "kiosk.trust.guided.body": "एक बार में एक सवाल, आपकी भाषा में।",
  "kiosk.trust.staff.title": "स्टाफ मदद करेगा",
  "kiosk.trust.staff.body": "कभी भी पास खड़े स्टाफ से पूछ सकते हैं।",

  "kiosk.progress.label": "आपकी प्रगति",
  "kiosk.progress.step": "कदम {current} / {total}",

  "kiosk.state.loading": "कृपया एक पल रुकें…",
  "kiosk.state.error.title": "कुछ गड़बड़ हो गई",
  "kiosk.state.error.body": "कृपया स्टाफ से मदद माँगें।",
  "kiosk.state.error.retry": "फिर कोशिश करें",
  "kiosk.state.offline.title": "अभी कनेक्शन नहीं है",
  "kiosk.state.offline.body": "आप आगे बढ़ सकते हैं। आपके जवाब इसी कियोस्क पर सुरक्षित हैं।",
  "kiosk.state.unsynced": "इस कियोस्क पर सेव — अभी भेजा नहीं गया",
  "kiosk.state.empty": "यहाँ अभी कुछ नहीं है",

  "kiosk.stub.title": "यह हिस्सा आगे आएगा",
  "kiosk.stub.body": "चेक-इन का यह हिस्सा अभी तैयार नहीं है।",
  "kiosk.stub.back": "वापस जाएँ",

  "kiosk.step.welcome": "स्वागत",
  "kiosk.step.consent": "सहमति",
  "kiosk.step.identification": "आपकी जानकारी",
  "kiosk.step.introduction": "यह कैसे काम करता है",
  "kiosk.step.caseTaking": "अपनी बात बताइए",
  "kiosk.step.confirm": "पुष्टि करें",
  "kiosk.step.questions": "कुछ सवाल",
  "kiosk.step.vitals": "ज़रूरी बातें",
  "kiosk.step.documents": "कागज़ात",
  "kiosk.step.processing": "तैयार हो रहा है",
  "kiosk.step.review": "दोबारा देखें",
  "kiosk.step.complete": "पूरा हुआ",
};
