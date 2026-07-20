import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, GlobeMap } from "@/components/aeon/Widgets";
import {
  LayoutDashboard, Network, Cloud, Database, ShieldCheck, Server,
  HardDrive, Cpu, Globe2, Activity, Boxes, Workflow, FileText,
} from "lucide-react";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({ meta: [{ title: "Infrastructure — AEON GENESIS OS" }] }),
  component: InfrastructurePage,
});

const NAV = [
  { label: "Infrastructure Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Service Topology", icon: <Boxes className="size-4" /> },
  { label: "Resource Inventory", icon: <HardDrive className="size-4" /> },
  { label: "Edge Locations", icon: <Globe2 className="size-4" /> },
  { label: "Data Centers", icon: <Server className="size-4" /> },
  { label: "Network Map", icon: <Network className="size-4" /> },
  { label: "Compute Clusters", icon: <Cpu className="size-4" /> },
  { label: "Storage Systems", icon: <HardDrive className="size-4" /> },
  { label: "Databases", icon: <Database className="size-4" /> },
  { label: "Containers & Orchestration", icon: <Boxes className="size-4" /> },
  { label: "Serverless", icon: <Cloud className="size-4" /> },
  { label: "Backup & DR", icon: <ShieldCheck className="size-4" /> },
  { label: "Monitoring & Logs", icon: <Activity className="size-4" /> },
  { label: "Cost Management", icon: <FileText className="size-4" /> },
  { label: "Policies & Compliance", icon: <Workflow className="size-4" /> },
];

function InfrastructurePage() {
  return (
    <AppShell
      title="INFRASTRUCTURE OVERVIEW"
      subtitle="A resilient, scalable, and secure foundation for Kingdom impact."
      side={
        <div className="space-y-4">
          <SideNav heading="Infrastructure Navigation" items={NAV} />
          <Panel title="Global Infrastructure">
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              {[["6", "Regions"], ["24", "Availability Zones"], ["96", "Edge Locations"]].map(([v, l]) => (
                <div key={l}><div className="font-display text-lg text-cyan">{v}</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">{l}</div></div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <div className="font-display text-xl text-emerald">99.99%</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Global Uptime</div>
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {[
            ["Overall Health", "98", "+2% wk", "text-emerald"],
            ["Uptime", "99.99%", "30 Days", "text-emerald"],
            ["Total Services", "512", "Running", "text-cyan"],
            ["Total Instances", "2,843", "+156 wk", "text-violet"],
            ["Total Storage", "1.62 PB", "51% used", "text-gold"],
            ["Network Peak", "8.74 Tbps", "+12% wk", "text-blue"],
            ["Cost (MTD)", "$412,586", "-7% wk", "text-rose"],
          ].map(([v, l, d, c]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className={`font-display text-xl ${c}`}>{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <Panel title="Resource Utilization">
          <div className="grid grid-cols-2 gap-3">
            <Donut value={62} label="CPU" color="var(--accent-cyan)" size={120} />
            <Donut value={58} label="Memory" color="var(--accent-violet)" size={120} />
            <Donut value={51} label="Storage" color="var(--accent-gold)" size={120} />
            <Donut value={67} label="Network" color="var(--accent-emerald)" size={120} />
          </div>
        </Panel>
        <Panel title="Infrastructure Map" action={<span className="text-[10px] text-emerald">● Live</span>}>
          <GlobeMap caption="Active · Warning · Critical · Maintenance" />
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Compute Clusters">
          <ul className="space-y-2 text-xs">
            {[
              ["Production", "us-east-1", "Healthy", "128"],
              ["Analytics", "eu-west-1", "Healthy", "96"],
              ["AI/ML", "us-west-2", "Healthy", "64"],
              ["Edge", "ap-south-1", "Warning", "32"],
              ["Dev/Test", "ap-southeast-1", "Healthy", "48"],
            ].map(([n, r, s, c]) => (
              <li key={n} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <div>
                  <div className="text-[11px] font-semibold">{n} Cluster</div>
                  <div className="text-[10px] text-muted-foreground">{r}</div>
                </div>
                <div className="text-right">
                  <div className={`text-[10px] ${s === "Healthy" ? "text-emerald" : "text-gold"}`}>{s}</div>
                  <div className="text-[10px] text-muted-foreground">{c}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Storage Overview">
          <div className="flex items-center gap-3">
            <Donut value={51} label="1.62 PB" color="var(--accent-gold)" size={130} />
            <ul className="space-y-1 text-[11px]">
              <li className="flex justify-between gap-3"><span className="text-cyan">● Block</span><span>620 TB</span></li>
              <li className="flex justify-between gap-3"><span className="text-violet">● Object</span><span>512 TB</span></li>
              <li className="flex justify-between gap-3"><span className="text-emerald">● File</span><span>256 TB</span></li>
              <li className="flex justify-between gap-3"><span className="text-gold">● Archive</span><span>230 TB</span></li>
            </ul>
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">51% of 3.20 PB used</div>
        </Panel>
        <Panel title="Security Posture">
          <div className="flex items-center gap-3">
            <Donut value={95} label="Secure" color="var(--accent-emerald)" size={130} />
            <ul className="space-y-1 text-[11px]">
              {[["Identity & Access", "98%"], ["Network Security", "94%"], ["Data Protection", "96%"], ["Vulnerability Mgmt", "93%"], ["Compliance", "95%"]].map(([l, v]) => (
                <li key={l} className="flex justify-between gap-3"><span className="text-muted-foreground">{l}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-2 text-[10px] text-emerald">No critical vulnerabilities</div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Alerts & Incidents">
          <ul className="space-y-2 text-xs">
            {[
              ["High Network Latency", "us-east-1", "2m", "text-rose"],
              ["Storage Capacity > 80%", "eu-west-1", "15m", "text-gold"],
              ["Unusual CPU Spike", "ap-southeast-1", "32m", "text-gold"],
              ["Backup Completed", "us-west-2", "1h", "text-emerald"],
              ["Security Patch Available", "Multiple", "2h", "text-cyan"],
            ].map(([t, r, w, c]) => (
              <li key={t} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <div>
                  <div className={`text-[11px] font-semibold ${c}`}>{t}</div>
                  <div className="text-[10px] text-muted-foreground">{r}</div>
                </div>
                <span className="text-[10px] text-muted-foreground">{w} ago</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Cost Optimization">
          <div className="font-display text-2xl text-gold">$86,420</div>
          <div className="text-[10px] uppercase tracking-widest text-emerald">↓ 14% Potential Savings</div>
          <ul className="mt-3 space-y-1 text-xs">
            {[["Right-size instances", "$32,400"], ["Stop idle resources", "$24,750"], ["Storage lifecycle", "$18,120"], ["Committed use", "$11,150"]].map(([l, v]) => (
              <li key={l} className="flex justify-between border-b border-panel-border/60 pb-1"><span className="text-muted-foreground">{l}</span><span>{v}</span></li>
            ))}
          </ul>
        </Panel>
        <Panel title="Upcoming Maintenance">
          <ul className="space-y-2 text-xs">
            {[
              ["JUN 01", "Network Maintenance", "us-east-1", "1:00 – 3:00 UTC"],
              ["JUN 03", "Storage System Update", "eu-west-1", "2:00 – 4:00 UTC"],
              ["JUN 05", "Security Update", "Multiple", "23:00 – 01:00 UTC"],
            ].map(([d, t, r, w]) => (
              <li key={t} className="panel p-2">
                <div className="flex items-center gap-2">
                  <div className="grid size-9 place-items-center rounded-md bg-white/5 text-[10px] font-bold text-cyan">{d}</div>
                  <div>
                    <div className="text-[11px] font-semibold">{t}</div>
                    <div className="text-[10px] text-muted-foreground">{r} · {w}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="italic text-muted-foreground">
            "By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled." <span className="text-cyan">Proverbs 24:3-4</span>
          </div>
          <div className="flex gap-4">
            {[["Built on Trust"], ["Secured by Design"], ["Resilient by Architecture"], ["Sustainable by Purpose"]].map(([t]) => (
              <div key={t} className="text-[10px] uppercase tracking-widest text-cyan">● {t}</div>
            ))}
          </div>
        </div>
      </Panel>
    </AppShell>
  );
}
