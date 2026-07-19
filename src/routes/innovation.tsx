import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, Pipeline, GlobeMap } from "@/components/aeon/Widgets";
import {
  Lightbulb, Rocket, Handshake, Building2, Store, DollarSign, Users, Sparkles,
  LayoutDashboard, Compass, FlaskConical, Factory, Award, Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/innovation")({
  head: () => ({ meta: [{ title: "Innovation & Entrepreneurship — AEON GENESIS OS" }] }),
  component: InnovationPage,
});

const NAV = [
  { label: "Innovation Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Idea Hub", icon: <Lightbulb className="size-4" /> },
  { label: "Opportunity Explorer", icon: <Compass className="size-4" /> },
  { label: "Solution Lab", icon: <FlaskConical className="size-4" /> },
  { label: "Startup Studio", icon: <Rocket className="size-4" /> },
  { label: "Venture Builder", icon: <Factory className="size-4" /> },
  { label: "Incubator Programs", icon: <Building2 className="size-4" /> },
  { label: "Accelerator Programs", icon: <Award className="size-4" /> },
  { label: "Patents & IP", icon: <Sparkles className="size-4" /> },
  { label: "Marketplace", icon: <Store className="size-4" /> },
  { label: "Investors Network", icon: <DollarSign className="size-4" /> },
  { label: "Partnerships", icon: <Handshake className="size-4" /> },
  { label: "Mentorship Match", icon: <Users className="size-4" /> },
  { label: "Resources & Tools", icon: <Briefcase className="size-4" /> },
];

function InnovationPage() {
  return (
    <AppShell
      title="INNOVATION & ENTREPRENEURSHIP"
      subtitle="Kingdom Innovation. Marketplace Impact. Eternal Value."
      side={
        <div className="space-y-4">
          <SideNav heading="Innovation Navigation" items={NAV} />
          <Panel title="Quick Actions">
            <div className="space-y-1.5 text-xs">
              {["Submit New Idea", "Start a Project", "Find Co-founder", "Apply for Funding", "Join Program", "Book Mentorship"].map((a) => (
                <button key={a} className="w-full rounded-md border border-panel-border bg-white/5 px-3 py-1.5 text-left hover:bg-white/10">{a}</button>
              ))}
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            ["Innovate", "With Purpose"],
            ["Build", "With Excellence"],
            ["Collaborate", "With Integrity"],
            ["Scale", "With Impact"],
            ["Multiply", "For Generations"],
          ].map(([t, s]) => (
            <div key={t} className="text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-white/5 text-violet ring-1 ring-violet/40"><Sparkles className="size-5" /></div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider">{t}</div>
              <div className="text-[10px] text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["24.7K", "Ideas Submitted", "+18.6%"],
            ["3.2K", "Active Projects", "+22.4%"],
            ["468", "Startups Launched", "+16.8%"],
            ["18.6K", "Jobs Created", "+21.3%"],
            ["$126.8M", "Funding Raised", "+28.7%"],
            ["24.1M", "Lives Impacted", "+31.2%"],
          ].map(([v, l, d]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="font-display text-2xl text-foreground">{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Panel title="Innovation Pipeline">
          <Pipeline
            steps={[
              { label: "1. Discover", sub: "6.2K Ideas", color: "var(--accent-cyan)", icon: <Lightbulb className="size-4" /> },
              { label: "2. Validate", sub: "2.8K Ideas", color: "var(--accent-violet)", icon: <Sparkles className="size-4" /> },
              { label: "3. Develop", sub: "1.4K Projects", color: "var(--accent-blue)", icon: <FlaskConical className="size-4" /> },
              { label: "4. Launch", sub: "468 Startups", color: "var(--accent-emerald)", icon: <Rocket className="size-4" /> },
              { label: "5. Scale", sub: "217 Scaleups", color: "var(--accent-gold)", icon: <Factory className="size-4" /> },
            ]}
          />
        </Panel>
        <Panel title="Top Innovation Categories">
          <div className="flex items-center gap-4">
            <Donut value={78} label="Total Ideas" color="var(--accent-cyan)" size={140} />
            <ul className="space-y-1 text-xs">
              {[["Technology & AI", "28%", "cyan"], ["Education", "18%", "violet"], ["Health & Wellness", "16%", "rose"], ["Sustainability", "14%", "emerald"], ["Fintech & Economy", "10%", "gold"], ["Community", "8%", "blue"], ["Other", "6%", "muted-foreground"]].map(([l, v, c]) => (
                <li key={l} className="flex items-center gap-2"><span className={`size-2 rounded-full bg-${c}`} /><span className="flex-1">{l}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Success Stories">
          {[
            ["AgriVerse Africa", "AI-powered farming solutions", "1.2M Farmers"],
            ["BrightLight Education", "Affordable solar-powered learning devices", "850K Students"],
            ["HopePay", "Ethical microfinance for small businesses", "2.3K Businesses"],
          ].map(([n, d, i]) => (
            <div key={n} className="mb-3 border-b border-panel-border/60 pb-3 last:border-0 last:mb-0">
              <div className="text-sm font-semibold">{n}</div>
              <div className="text-xs text-muted-foreground">{d}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-emerald">Impact · {i}</div>
            </div>
          ))}
        </Panel>

        <Panel title="Funding Opportunities">
          <ul className="space-y-2 text-xs">
            {[
              ["Kingdom Innovation Fund", "Up to $250K · Seed – Series A"],
              ["Impact Growth Fund", "$250K – $2M · Growth"],
              ["Global Solutions Grant", "Up to $100K · Early Stage"],
              ["FaithTech Accelerator", "$50K – $250K · Technology"],
            ].map(([n, d]) => (
              <li key={n} className="panel flex items-center justify-between p-2">
                <div><div className="font-semibold">{n}</div><div className="text-[10px] text-muted-foreground">{d}</div></div>
                <button className="rounded border border-cyan/40 bg-cyan/10 px-2 py-1 text-[10px] uppercase text-cyan">Open</button>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Ecosystem Collaboration">
          <GlobeMap />
          <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px]">
            {[["8,947", "Orgs"], ["5,632", "Investors"], ["12,847", "Innovators"], ["147", "Countries"]].map(([v, l]) => (
              <div key={l}><div className="font-display text-sm">{v}</div><div className="text-muted-foreground uppercase tracking-widest">{l}</div></div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
