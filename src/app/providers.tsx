"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import {
  AppLanguageProvider,
  DisplayPreferencesProvider,
  VoiceAccessibilityProvider,
} from "@/lib/a11y";
import { VoiceStatusIndicator } from "@/components/a11y";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppLanguageProvider>
        <DisplayPreferencesProvider>
          <VoiceAccessibilityProvider>
            {children}
            <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
              <VoiceStatusIndicator />
            </div>
          </VoiceAccessibilityProvider>
        </DisplayPreferencesProvider>
      </AppLanguageProvider>
    </QueryClientProvider>
  );
}
