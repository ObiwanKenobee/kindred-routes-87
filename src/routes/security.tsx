import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow, GlobeMap } from "@/components/aeon/Widgets";
import {
  ShieldCheck, LayoutDashboard, UserCheck, Lock, Search, FileText,
  AlertTriangle, Eye, Users, Activity, BookOpen, Fingerprint,
} from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [{ title: "Security & Trust — AEON GENESIS OS" }] }),
  component: SecurityPage,
});

const NAV = [
  { label: "Security Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Identity & Access", icon: <UserCheck className="size-4" /> },
  { label: "Zero Trust Network", icon: <Fingerprint className="size-4" /> },
  { label: "Data Protection", icon: <Lock className="size-4" /> },
  { label: "Threat Detection", icon: <Search className="size-4" /> },
  { label: "Vulnerability Management", icon: <AlertTriangle className="size-4" /> },
  { label: "Security Operations", icon: <Eye className="size-4" /> },
  { label: "Compliance Center", icon: <FileText className="size-4" /> },
  { label: "Privacy Management", icon: <ShieldCheck className="size-4" /> },
  { label: "Security Policies", icon: <FileText className="size-4" /> },
  { label: "Audit & Logs", icon: <Activity className="size-4" /> },
  { label: "Incident Response", icon: <AlertTriangle className="size-4" /> },
  { label: "Business Continuity", icon: <Users className="size-4" /> },
  { label: "Security Awareness", icon: <BookOpen className="size-4" /> },
];

function SecurityPage() {
  return (
    <AppShell
      title="SECURITY OVERVIEW"
      subtitle="Unified protection for people, data, and systems across the Kingdom."
      side={
        <div className="space-y-4">
          <SideNav heading="Security Navigation" items={NAV} />
          <Panel title="Trust Score">
            <Donut value={92} label="Excellent" color="var(--accent-emerald)" size={140} />
            <div className="mt-2 text-center text-[10px] text-emerald">↑ 8% vs last month</div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Security Score", "92/100", "+8% mo", "text-emerald"],
            ["Threats Blocked", "18,547", "+23% wk", "text-cyan"],
            ["Risk Exposure", "Low", "-15% wk", "text-emerald"],
            ["Incidents", "7", "-22% wk", "text-gold"],
            ["Assets Protected", "12,843", "+18% wk", "text-violet"],
            ["Compliance", "98%", "+5% wk", "text-emerald"],
          ].map(([v, l, d, c]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className={`font-display text-2xl ${c}`}>{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Threat Map" action={<span className="text-[10px] text-emerald">● Live</span>}>
          <GlobeMap caption="Critical · High · Medium · Low · Info" />
        </Panel>
        <Panel title="Security Posture">
          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            {[
              ["Identity", 95, "cyan"],
              ["Data", 94, "violet"],
              ["Endpoint", 89, "gold"],
              ["Infrastructure", 90, "emerald"],
              ["Network", 91, "blue"],
              ["Application", 93, "rose"],
            ].map(([l, v, c]) => (
              <div key={l as string} className="panel p-2">
                <div className={`font-display text-lg`} style={{ color: `var(--accent-${c})` }}>{v as number}</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{l as string}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-emerald">92 Excellent Overall</div>
        </Panel>
        <Panel title="Zero Trust Status">
          <ul className="space-y-2 text-xs">
            {[
              ["Verify Every User", "Authenticated"],
              ["Validate Every Device", "Compliant"],
              ["Encrypt Every Connection", "Encrypted"],
              ["Least Privilege Access", "Enforced"],
              ["Continuous Monitoring", "Active"],
            ].map(([l, s]) => (
              <li key={l} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{l}</span>
                <span className="text-emerald">✓ {s}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Active Threats">
          <ul className="space-y-2 text-xs">
            {[
              ["Malware Campaign Detected", "us-east-1", "High", "text-rose"],
              ["Suspicious Login Attempt", "Multiple", "Medium", "text-gold"],
              ["Data Exfiltration Attempt", "eu-west-1", "High", "text-rose"],
              ["Unusual Network Behavior", "AI/ML Detected", "Medium", "text-gold"],
              ["Phishing Email Detected", "Finance Dept", "Low", "text-cyan"],
            ].map(([t, r, s, c]) => (
              <li key={t} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <div>
                  <div className={`text-[11px] font-semibold ${c}`}>{t}</div>
                  <div className="text-[10px] text-muted-foreground">{r}</div>
                </div>
                <span className={`text-[10px] ${c}`}>{s}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Identity & Access">
          <div className="flex items-center gap-3">
            <Donut value={78} label="Identities" color="var(--accent-cyan)" size={130} />
            <ul className="space-y-1 text-[11px]">
              {[["● Users", "8,217"], ["● Services", "2,341"], ["● Devices", "1,823"], ["● Guests", "462"]].map(([l, v]) => (
                <li key={l} className="flex justify-between gap-4"><span className="text-muted-foreground">{l}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">12,843 Total Identities</div>
        </Panel>
        <Panel title="Compliance Center">
          <div className="flex items-center gap-3">
            <Donut value={98} label="Compliant" color="var(--accent-emerald)" size={130} />
            <ul className="space-y-1 text-[11px]">
              {[["ISO 27001", "✓"], ["SOC 2 Type II", "✓"], ["GDPR", "✓"], ["HIPAA", "✓"], ["PCI DSS", "✓"]].map(([l, v]) => (
                <li key={l} className="flex justify-between gap-4"><span className="text-muted-foreground">{l}</span><span className="text-emerald">{v} Compliant</span></li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Data Protection">
          <div className="space-y-2">
            <BarRow label="Encrypted Data" value={98} color="var(--accent-emerald)" />
            <BarRow label="Classified Data" value={92} color="var(--accent-cyan)" />
            <BarRow label="DLP Policy Matches" value={87} color="var(--accent-violet)" />
            <BarRow label="Data Backed Up" value={100} color="var(--accent-gold)" />
          </div>
          <div className="mt-3 text-[10px] text-emerald">✓ All critical data is protected</div>
        </Panel>
        <Panel title="Incident Response Playbook">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {["Detect", "Analyze", "Contain", "Eradicate", "Recover"].map((s, i, arr) => (
              <div key={s} className="flex items-center gap-2">
                <div className="panel px-3 py-2 text-center">
                  <div className="font-display text-sm text-cyan">{s}</div>
                </div>
                {i < arr.length - 1 && <span className="text-muted-foreground">›</span>}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
            <div><div className="font-display text-lg text-cyan">14</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Playbooks</div></div>
            <div><div className="font-display text-lg text-gold">7</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Incidents (30d)</div></div>
            <div><div className="font-display text-lg text-emerald">92%</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Resolved</div></div>
          </div>
        </Panel>
      </div>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="italic text-muted-foreground">"Security is not a product, it's a promise we keep." Protecting the Kingdom. Empowering Generations.</div>
          <div className="flex gap-4">
            {["Built on Zero Trust", "Security by Design", "Privacy by Default", "Resilient Always", "Trust in Every Layer"].map((t) => (
              <div key={t} className="text-[10px] uppercase tracking-widest text-cyan">● {t}</div>
            ))}
          </div>
        </div>
      </Panel>
    </AppShell>
  );
}
