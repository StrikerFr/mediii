import {
  adminAuditEvents,
  adminConfiguration,
  adminFacilities,
  adminOverview,
  adminRoles,
  adminSession,
  adminUsers,
} from "./mock/data";
import type { AdminConfiguration, AdminUser } from "./types";
const wait = async <T>(value: T) => {
  await new Promise((resolve) => setTimeout(resolve, 180));
  return structuredClone(value);
};
export const adminApi = {
  getOverview: () => wait(adminOverview),
  getSession: () => wait(adminSession),
  getUsers: () => wait(adminUsers),
  getUser: (id: string) => wait(adminUsers.find((item) => item.id === id) ?? null),
  updateUser: (_id: string, _updates: Partial<AdminUser>) => wait({ ok: true as const }),
  getRoles: () => wait(adminRoles),
  getRole: (id: string) => wait(adminRoles.find((item) => item.id === id) ?? null),
  getFacilities: () => wait(adminFacilities),
  getFacility: (id: string) => wait(adminFacilities.find((item) => item.id === id) ?? null),
  getAuditLog: () => wait(adminAuditEvents),
  getAuditEvent: (id: string) => wait(adminAuditEvents.find((item) => item.id === id) ?? null),
  getConfiguration: () => wait(adminConfiguration),
  updateConfiguration: (_updates: Partial<AdminConfiguration>) => wait({ ok: true as const }),
};
