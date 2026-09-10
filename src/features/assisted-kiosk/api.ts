import { mockAssistedPatients, mockStaffSession } from "./mock/data";
import type { AssistedPatient } from "./types";

const copyPatient = (patient: AssistedPatient): AssistedPatient => ({
  ...patient,
  intakeProgress: { ...patient.intakeProgress },
});

/** Frontend-only service boundary. No network, identity, or clinical service is connected. */
export const assistedKioskApi = {
  getSession: async () => ({ ...mockStaffSession }),
  getQueue: async () => mockAssistedPatients.map(copyPatient),
  getPatient: async (id: string) => {
    const patient = mockAssistedPatients.find((item) => item.id === id);
    return patient ? copyPatient(patient) : null;
  },
  startIntake: async (id: string) => ({
    patientId: id,
    status: "in-progress" as const,
    startedAt: "Now",
  }),
  getIntakeStatus: async (id: string) => {
    const patient = mockAssistedPatients.find((item) => item.id === id);
    return patient?.intakeProgress ?? null;
  },
  getHandoffStatus: async (id: string) => {
    const patient = mockAssistedPatients.find((item) => item.id === id);
    return patient?.handoffStatus ?? null;
  },
};
