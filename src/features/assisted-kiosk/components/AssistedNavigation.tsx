import {
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  FileText,
  PlayCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { to: "/assisted-kiosk", label: "Queue", icon: ClipboardList, exact: true },
  { to: "/assisted-kiosk/case-taking", label: "Active intake", icon: PlayCircle },
  { to: "/assisted-kiosk/handoff", label: "Completed", icon: CheckCircle2 },
  { to: "/assisted-kiosk/documents", label: "Documents", icon: FileText },
] as const;
export function AssistedNavigation() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-56 shrink-0 border-r border-border bg-surface lg:block">
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col p-3">
        <p className="px-3 pb-2 pt-3 text-xs font-semibold uppercase text-muted-foreground">
          Staff workspace
        </p>
        <nav aria-label="Assisted care navigation" className="space-y-1">
          {links.map((link) => {
            const active =
              "exact" in link
                ? pathname === link.to || pathname === "/assisted-kiosk/queue"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                href={link.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-surface-sunken hover:text-foreground",
                  active && "bg-primary-soft/55 text-foreground",
                )}
              >
                <link.icon className="size-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-border pt-3">
          <Link
            href="/assisted-kiosk/start"
            className="flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-surface-sunken"
          >
            <CircleHelp className="size-5" />
            Help
          </Link>
          <Link
            href="/assisted-kiosk/vitals"
            className="flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-surface-sunken"
          >
            <Settings className="size-5" />
            Settings
          </Link>
          <p className="px-3 pt-3 text-xs text-muted-foreground">Synthetic data only</p>
        </div>
      </div>
    </aside>
  );
}
export function AssistedMobileNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Mobile assisted care navigation"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      {links.map((link) => {
        const active =
          link.to === "/assisted-kiosk"
            ? pathname === link.to || pathname === "/assisted-kiosk/queue"
            : pathname.startsWith(link.to);
        return (
          <Link
            key={link.to}
            href={link.to}
            className={cn(
              "flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-[11px] font-medium text-muted-foreground",
              active && "text-primary",
            )}
          >
            <link.icon className="size-5" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
