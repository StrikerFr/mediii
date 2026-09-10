import type {
  CaseAlert,
  CaseDocument,
  Clinician,
  ClinicianNotification,
  DashboardMetrics,
  DraftSummary,
  PatientCase,
  SearchResult,
  WorklistPatient,
} from "./types";
import { mockClinician, mockWorklist } from "./mock/patients";
import { getMockCase } from "./mock/cases";
import { mockDocuments } from "./mock/documents";
import { mockAlerts } from "./mock/alerts";
import { mockNotifications } from "./mock/notifications";

/**
 * Frontend API abstraction for the clinician workspace.
 *
 * Every function currently resolves synthetic demo data from `./mock`. When the
 * real FastAPI backend exists, only the bodies below change — no UI component
 * imports mock data directly.
 */
export const clinicianApi = {
  async getSession(): Promise<Clinician> {
    return mockClinician;
  },

  async getWorklist(): Promise<WorklistPatient[]> {
    return mockWorklist;
  },

  async getMetrics(): Promise<DashboardMetrics> {
    const list = mockWorklist;
    return {
      waiting: list.filter((p) => p.status === "waiting" || p.status === "ready").length,
      priority: list.filter((p) => p.priority === "priority").length,
      urgent: list.filter((p) => p.priority === "urgent").length,
      ready: list.filter((p) => p.status === "ready").length,
      completedToday: list.filter((p) => p.status === "completed").length + 7,
    };
  },

  async getPatientCase(id: string): Promise<PatientCase | null> {
    return getMockCase(id);
  },

  async getPatientDocuments(id: string): Promise<CaseDocument[]> {
    return mockDocuments[id] ?? [];
  },

  async getPatientAlerts(id: string): Promise<CaseAlert[]> {
    return mockAlerts[id] ?? [];
  },

  async getSummary(id: string): Promise<DraftSummary | null> {
    return getMockCase(id)?.draftSummary ?? null;
  },

  async getNotifications(): Promise<ClinicianNotification[]> {
    return mockNotifications;
  },

  async search(query: string): Promise<SearchResult[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: SearchResult[] = [];

    for (const patient of mockWorklist) {
      if (
        patient.name.toLowerCase().includes(q) ||
        patient.caseId.toLowerCase().includes(q) ||
        patient.chiefConcern.toLowerCase().includes(q)
      ) {
        results.push({
          id: `patient-${patient.id}`,
          kind: "patient",
          title: patient.name,
          subtitle: `${patient.age} years · ${patient.chiefConcern}`,
          patientId: patient.id,
        });
        results.push({
          id: `case-${patient.caseId}`,
          kind: "case",
          title: `Case ${patient.caseId}`,
          subtitle: `${patient.name} · ${patient.language}`,
          patientId: patient.id,
        });
      }
    }

    for (const [patientId, docs] of Object.entries(mockDocuments)) {
      for (const doc of docs) {
        if (doc.name.toLowerCase().includes(q) || doc.kind.toLowerCase().includes(q)) {
          results.push({
            id: `doc-${doc.id}`,
            kind: "document",
            title: doc.name,
            subtitle: `${doc.kind} · ${patientId}`,
            patientId,
          });
        }
      }
    }

    return results.slice(0, 8);
  },
};
