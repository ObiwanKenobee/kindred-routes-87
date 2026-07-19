import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow } from "@/components/aeon/Widgets";
import { Scale, ShieldCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/governance")({
  head: () => ({ meta: [{ title: "Governance — AEON GENESIS OS" }] }),
  component: () => (
    <AppShell title="KINGDOM GOVERNANCE" subtitle="Accountable. Transparent. Aligned with eternal values.">
      <div className="grid gap-5 lg:grid-cols-3">
        {[[Scale, "Kingdom Governance", "Faith-rooted decision making"], [ShieldCheck, "Ethics & Accountability", "Guardrails, reviews, and integrity"], [FileText, "Transparency Ledger", "Open financials and impact reports"]].map(([I, t, d]) => {
          const Icon = I as any;
          return (
            <Panel key={t as string}>
              <Icon className="size-6 text-cyan" />
              <div className="mt-2 text-sm font-semibold">{t as string}</div>
              <div className="text-xs text-muted-foreground">{d as string}</div>
            </Panel>
          );
        })}
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="Governance Health">
          <div className="space-y-2">
            <BarRow label="Ethical Alignment" value={98} color="var(--accent-emerald)" />
            <BarRow label="Financial Transparency" value={99} color="var(--accent-cyan)" />
            <BarRow label="Board Accountability" value={94} color="var(--accent-violet)" />
            <BarRow label="Policy Compliance" value={97} color="var(--accent-gold)" />
            <BarRow label="Stakeholder Engagement" value={91} color="var(--accent-rose)" />
          </div>
        </Panel>
        <Panel title="Integrity Score"><Donut value={96} label="Integrity" color="var(--accent-emerald)" size={160} /></Panel>
      </div>
      <Panel title="Transparency Ledger — Recent Actions">
        <ul className="divide-y divide-panel-border/60 text-sm">
          {[["Board approved 2026 Global Impact Budget", "3d ago"], ["Ethics review completed for AI recommendation engine", "1w ago"], ["Published Q2 Impact Report", "2w ago"], ["New whistleblower policy ratified", "1mo ago"]].map(([t, w]) => (
            <li key={t} className="flex items-center justify-between py-3"><span>{t}</span><span className="text-xs text-muted-foreground">{w}</span></li>
          ))}
        </ul>
      </Panel>
    </AppShell>
  ),
});
