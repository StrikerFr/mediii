import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { patientApi } from "./api";
import { useAppLanguage } from "@/lib/a11y";
import { en, type PatientTranslationKey } from "./translations/en";
import { hi } from "./translations/hi";
import type {
  PatientConnection,
  PatientLanguage,
  PatientNotification,
  PatientProfile,
} from "./types";
import { mockPatientDashboard, mockPatientProfile } from "./mock/data";

type PatientContextValue = {
  profile: PatientProfile;
  language: PatientLanguage;
  setLanguage: (language: PatientLanguage) => void;
  t: (key: PatientTranslationKey) => string;
  notifications: PatientNotification[];
  unreadCount: number;
  markAllRead: () => void;
  connection: PatientConnection;
  setConnection: (connection: PatientConnection) => void;
};

const PatientContext = createContext<PatientContextValue | null>(null);

export function PatientProvider({ children }: { children: ReactNode }) {
  const [profile] = useState(mockPatientProfile);
  const { language, setLanguage } = useAppLanguage();
  const [notifications, setNotifications] = useState(mockPatientDashboard.notifications);
  const [connection, setConnection] = useState<PatientConnection>("online");
  const markAllRead = useCallback(
    () => setNotifications((items) => items.map((item) => ({ ...item, unread: false }))),
    [],
  );

  const value = useMemo<PatientContextValue>(
    () => ({
      profile,
      language,
      setLanguage,
      t: (key) => (language === "hi" ? hi[key] : en[key]),
      notifications,
      unreadCount: notifications.filter((item) => item.unread).length,
      markAllRead,
      connection,
      setConnection,
    }),
    [profile, language, setLanguage, notifications, markAllRead, connection],
  );

  return <PatientContext.Provider value={value}>{children}</PatientContext.Provider>;
}

export function usePatient() {
  const value = useContext(PatientContext);
  if (!value) throw new Error("usePatient must be used inside PatientProvider");
  return value;
}

export { patientApi };
