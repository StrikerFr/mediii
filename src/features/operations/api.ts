import {
  auditEntries,
  dlqEvents,
  outboxEvents,
  overview,
  replayRecords,
  reviewItems,
  searchHealth,
  services,
} from "./mock/data";
const wait = () => Promise.resolve();
const clone = <T>(value: T): T => structuredClone(value);
/** Frontend-only adapter. All values and action results are synthetic. */
export const operationsApi = {
  getOverview: async () => {
    await wait();
    return clone(overview);
  },
  getServices: async () => clone(services),
  getDlq: async () => clone(dlqEvents),
  getManualReview: async () => clone(reviewItems),
  getOutbox: async () => clone(outboxEvents),
  getSearchHealth: async () => clone(searchHealth),
  getReplay: async () => clone(replayRecords),
  getAuditLog: async () => clone(auditEntries),
  inspectEvent: async (id: string) => clone(dlqEvents.find((item) => item.id === id) ?? null),
  retryEvent: async (id: string) => ({ id, status: "processing" as const }),
  replayEvent: async (id: string) => ({ id, status: "queued" as const }),
};
