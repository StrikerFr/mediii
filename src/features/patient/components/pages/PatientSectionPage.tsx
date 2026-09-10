import {
  Bell,
  CheckCircle2,
  ClipboardList,
  FileText,
  FolderOpen,
  HeartHandshake,
  History,
  Settings,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { mockPatientDashboard } from "@/features/patient/mock/data";
import { usePatient } from "@/features/patient/patient-context";

export type PatientSection =
  "timeline" | "reports" | "documents" | "intakes" | "consents" | "profile" | "notifications";
const sectionInfo = {
  timeline: {
    eyebrow: "Your health journey",
    title: "My Timeline",
    description: "Consultations, records, and information added over time.",
    icon: History,
  },
  reports: {
    eyebrow: "Your records",
    title: "Reports",
    description: "Reports that are currently available in this demonstration.",
    icon: FileText,
  },
  documents: {
    eyebrow: "Your records",
    title: "Documents",
    description: "Documents and prescriptions kept together for easy access.",
    icon: FolderOpen,
  },
  intakes: {
    eyebrow: "Information you shared",
    title: "My Intakes",
    description: "Review the information prepared before your consultations.",
    icon: ClipboardList,
  },
  consents: {
    eyebrow: "Privacy & control",
    title: "Consent",
    description: "Review how your health information may be used and shared.",
    icon: HeartHandshake,
  },
  profile: {
    eyebrow: "Your preferences",
    title: "Profile",
    description: "Keep your language, accessibility, and privacy preferences easy to find.",
    icon: UserRound,
  },
  notifications: {
    eyebrow: "Recent activity",
    title: "Notifications",
    description: "Updates about records available in this demonstration.",
    icon: Bell,
  },
} as const;

export function PatientSectionPage({ section }: { section: PatientSection }) {
  const info = sectionInfo[section];
  const Icon = info.icon;
  const { profile, language, setLanguage, notifications, markAllRead } = usePatient();
  return (
    <div className="mx-auto max-w-4xl">
      <header className="border-b border-border pb-6">
        <p className="text-sm font-semibold uppercase text-primary">{info.eyebrow}</p>
        <div className="mt-3 flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary-soft/60 text-primary">
            <Icon className="size-6" />
          </span>
          <div>
            <h1 className="text-[32px] font-semibold leading-tight sm:text-[40px]">{info.title}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">{info.description}</p>
          </div>
        </div>
      </header>
      {section === "timeline" && (
        <ol className="mt-8 ml-2 border-l border-border pl-7">
          {mockPatientDashboard.timeline.map((event) => (
            <li key={event.id} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[34px] top-1 size-3 rounded-full bg-secondary ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase text-muted-foreground">{event.date}</p>
              <h2 className="mt-1 text-lg font-semibold">{event.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{event.detail}</p>
            </li>
          ))}
        </ol>
      )}
      {section === "reports" && (
        <RecordList
          items={mockPatientDashboard.recentRecords.filter((item) => item.kind === "report")}
        />
      )}
      {section === "documents" && (
        <RecordList
          items={mockPatientDashboard.documents.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.type,
            date: item.date,
            status: "Available",
          }))}
        />
      )}
      {section === "intakes" && (
        <RecordList
          items={mockPatientDashboard.intakes.map((item) => ({
            id: item.id,
            title: item.title,
            description: "Information shared before consultation",
            date: item.date,
            status: item.status,
          }))}
        />
      )}
      {section === "consents" && (
        <div className="mt-8 border-y border-border py-6">
          <h2 className="text-xl font-semibold">Your information choices</h2>
          <p className="mt-2 text-muted-foreground">
            Review the demonstration settings for how your health information may be used and
            shared.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Last reviewed: {mockPatientDashboard.consent.lastReviewed}
          </p>
          <Button className="mt-5" disabled>
            Consent updates coming later
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            No real consent service or health-record connection is active.
          </p>
        </div>
      )}
      {section === "profile" && (
        <div className="mt-8 divide-y divide-border border-y border-border">
          <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm text-muted-foreground">Name</span>
            <strong>{profile.name}</strong>
          </div>
          <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm text-muted-foreground">Language</span>
            <div className="flex gap-2">
              <Button
                variant={language === "hi" ? "default" : "outline"}
                onClick={() => setLanguage("hi")}
              >
                हिन्दी
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
              >
                English
              </Button>
            </div>
          </div>
          <PreferenceRow
            icon={Settings}
            title="Accessibility preferences"
            detail="Use the accessibility control in the header to adjust text, contrast, and motion."
          />
          <PreferenceRow
            icon={Bell}
            title="Notifications"
            detail="Notification delivery is not active in this frontend demonstration."
          />
          <PreferenceRow
            icon={HeartHandshake}
            title="Privacy & consent"
            detail="Review your information choices."
            to="/patient/consents"
          />
        </div>
      )}
      {section === "notifications" && (
        <div className="mt-8">
          <div className="flex justify-end">
            <Button variant="outline" onClick={markAllRead}>
              Mark all read
            </Button>
          </div>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {notifications.map((note) => (
              <li key={note.id} className="flex gap-3 py-5">
                {note.unread ? (
                  <span
                    className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                    aria-label="Unread"
                  />
                ) : (
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                )}
                <div>
                  <h2 className="font-semibold">{note.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {note.detail} · {note.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function RecordList({
  items,
}: {
  items: Array<{ id: string; title: string; description: string; date: string; status: string }>;
}) {
  return (
    <ul className="mt-8 divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.id} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm font-medium">{item.date}</p>
            <p className="text-xs text-accent-foreground">{item.status}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
function PreferenceRow({
  icon: Icon,
  title,
  detail,
  to,
}: {
  icon: typeof Settings;
  title: string;
  detail: string;
  to?: "/patient/consents";
}) {
  const content = (
    <>
      <Icon className="size-5 text-primary" />
      <span>
        <strong className="block">{title}</strong>
        <span className="mt-1 block text-sm text-muted-foreground">{detail}</span>
      </span>
    </>
  );
  return to ? (
    <Link href={to} className="grid grid-cols-[auto_1fr] gap-3 py-5 hover:bg-surface-sunken">
      {content}
    </Link>
  ) : (
    <div className="grid grid-cols-[auto_1fr] gap-3 py-5">{content}</div>
  );
}
