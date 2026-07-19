import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, LayerCard } from "@/components/aeon/Widgets";
import {
  Cpu, Layers, Cloud, Database, ShieldCheck, Workflow, Settings, LineChart,
  LayoutDashboard, Server, Zap, Boxes,
} from "lucide-react";

export const Route = createFileRoute("/platform")({
  head: () => ({ meta: [{ title: "Platform — AEON GENESIS OS" }] }),
  component: PlatformPage,
});

const NAV = [
  { label: "Platform Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "System Architecture", icon: <Layers className="size-4" /> },
  { label: "Microservices", icon: <Boxes className="size-4" /> },
  { label: "API Gateway", icon: <Zap className="size-4" /> },
  { label: "Data & Intelligence", icon: <Database className="size-4" /> },
  { label: "Security & Trust", icon: <ShieldCheck className="size-4" /> },
  { label: "Automation & Workflows", icon: <Workflow className="size-4" /> },
  { label: "Integration Hub", icon: <Cloud className="size-4" /> },
  { label: "Developer Center", icon: <Cpu className="size-4" /> },
  { label: "Monitoring & Observability", icon: <LineChart className="size-4" /> },
  { label: "Performance Analytics", icon: <LineChart className="size-4" /> },
  { label: "Infrastructure", icon: <Server className="size-4" /> },
  { label: "DevOps & CI/CD", icon: <Workflow className="size-4" /> },
  { label: "Release Management", icon: <Zap className="size-4" /> },
  { label: "Configuration Center", icon: <Settings className="size-4" /> },
];

function PlatformPage() {
  return (
    <AppShell
      title="PLATFORM OVERVIEW"
      subtitle="The Foundation That Empowers Every Mission."
      side={
        <div className="space-y-4">
          <SideNav heading="Platform Navigation" items={NAV} />
          <Panel title="Platform Status">
            <div className="flex items-center gap-3">
              <Donut value={98.7} label="Health" color="var(--accent-emerald)" size={100} />
              <ul className="space-y-1 text-[11px]">
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Services Online</span><span>248/248</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Response Time</span><span>128ms</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Uptime (30d)</span><span>99.95%</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Active Users</span><span>2.8M</span></li>
              </ul>
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Total Services", "248", "+12"],
            ["API Calls", "1.24B", "+18.6%"],
            ["Data Processed", "15.7 TB", "+24.9%"],
            ["Integrations", "186", "+9"],
            ["Workflows", "632", "+35.4%"],
            ["Automations", "1.8K", "+21.7%"],
          ].map(([v, l, d]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="font-display text-2xl">{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Platform Architecture">
          <div className="space-y-2">
            <LayerCard label="Experience Layer" sub="Web · Mobile · Voice · AI Interfaces" tone="cyan" />
            <LayerCard label="Application Layer" sub="Core Apps · Micro Frontends · Portals" tone="violet" />
            <LayerCard label="Service Layer" sub="Microservices · APIs · Events · Workflows" tone="blue" />
            <LayerCard label="Data Layer" sub="Databases · Data Lake · Cache · Search" tone="emerald" />
            <LayerCard label="Infrastructure Layer" sub="Cloud · Edge · Containers · Network" tone="gold" />
          </div>
        </Panel>
        <Panel title="Platform Services">
          <div className="grid grid-cols-2 gap-2 text-xs md:grid-cols-3">
            {[
              "Identity Service", "User Service", "Content Service",
              "Notification Service", "Payment Service", "Analytics Service",
              "Workflow Engine", "File Service", "Search Service",
              "AI Service", "Integration Service", "Audit Service",
            ].map((s) => (
              <div key={s} className="panel p-2">
                <div className="text-[11px] font-semibold">{s}</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald"><span className="size-1.5 rounded-full bg-emerald" /> Healthy</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="System Performance">
          <svg viewBox="0 0 300 120" className="h-32 w-full">
            {["#5cbdb9", "#a78bfa", "#facc15", "#34d399"].map((c, i) => (
              <polyline key={i} fill="none" stroke={c} strokeWidth="1.5"
                points={Array.from({ length: 30 }).map((_, j) => `${j * 10},${60 + Math.sin(j / 3 + i) * 20 + i * 5}`).join(" ")}
                style={{ filter: `drop-shadow(0 0 3px ${c})` }} />
            ))}
          </svg>
          <div className="mt-2 flex flex-wrap gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="text-cyan">● CPU</span><span className="text-violet">● Memory</span><span className="text-blue">● Network</span><span className="text-emerald">● Disk</span>
          </div>
        </Panel>
        <Panel title="Platform Metrics (30d)">
          <ul className="space-y-2 text-xs">
            {[["Requests Handled", "12.4B", "+22.4%"], ["Error Rate", "0.12%", "-38.7%"], ["Avg Response", "128ms", "-15.3%"], ["Throughput", "8.6K/s", "+19.8%"]].map(([l, v, d]) => (
              <li key={l} className="flex justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{l}</span>
                <span><span className="font-display text-sm">{v}</span> <span className="text-emerald text-[10px]">{d}</span></span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Security & Trust">
          <ul className="space-y-2 text-xs">
            {[["Security Score", "96/100", "Excellent", "text-emerald"], ["Vulnerabilities", "3", "Low Risk", "text-gold"], ["Compliance", "100%", "Compliant", "text-emerald"], ["Data Encryption", "256-bit", "Enabled", "text-cyan"], ["Threats Blocked", "1,247", "This Month", "text-rose"]].map(([l, v, s, c]) => (
              <li key={l} className="flex items-baseline justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{l}</span>
                <span><span className="font-display text-sm">{v}</span> <span className={`text-[10px] ${c}`}>{s}</span></span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg">Built on Grace. Engineered for Impact. Powered by Purpose.</div>
            <div className="text-xs text-muted-foreground">A unified platform for the advancement of the Kingdom and the transformation of nations.</div>
          </div>
          <div className="flex gap-4 text-center text-xs">
            {[["Scalable", "Built to Grow"], ["Secure", "By Design"], ["Reliable", "Always On"], ["Intelligent", "AI-Powered"], ["Interoperable", "Open Standards"]].map(([t, s]) => (
              <div key={t}><div className="font-semibold text-cyan">{t}</div><div className="text-[10px] text-muted-foreground">{s}</div></div>
            ))}
          </div>
        </div>
      </Panel>
    </AppShell>
  );
}
