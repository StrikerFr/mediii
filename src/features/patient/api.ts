import { mockPatientDashboard, mockPatientProfile, mockPatientSearch } from "./mock/data";
import type { PatientSearchResult } from "./types";

const wait = <T>(value: T, delay = 180) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), delay));

/** Frontend-only boundary. Replace these methods with real calls later without changing UI components. */
export const patientApi = {
  getProfile: () => wait(mockPatientProfile),
  getDashboard: () => wait(mockPatientDashboard),
  getTimeline: () => wait(mockPatientDashboard.timeline),
  getDocuments: () => wait(mockPatientDashboard.documents),
  getReports: () =>
    wait(mockPatientDashboard.recentRecords.filter((item) => item.kind === "report")),
  getIntakes: () => wait(mockPatientDashboard.intakes),
  getConsents: () => wait(mockPatientDashboard.consent),
  getNotifications: () => wait(mockPatientDashboard.notifications),
  search: (query: string): Promise<PatientSearchResult[]> => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return Promise.resolve([]);
    return wait(
      mockPatientSearch.filter((item) =>
        `${item.title} ${item.subtitle}`.toLowerCase().includes(normalized),
      ),
      80,
    );
  },
};
