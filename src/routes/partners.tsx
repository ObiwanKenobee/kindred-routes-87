import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, GlobeMap, BarRow } from "@/components/aeon/Widgets";
import {
  LayoutDashboard, Users, Building2, Globe2, Handshake, Rocket,
  Calendar, Newspaper, TrendingUp, GraduationCap, Award,
} from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [{ title: "Partners & Organizations — AEON GENESIS OS" }] }),
  component: PartnersPage,
});

const NAV = [
  { label: "Partners Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Partner Directory", icon: <Users className="size-4" /> },
  { label: "Organization Hub", icon: <Building2 className="size-4" /> },
  { label: "Network Map", icon: <Globe2 className="size-4" /> },
  { label: "Partnership Opportunities", icon: <Handshake className="size-4" /> },
  { label: "Active Collaborations", icon: <Rocket className="size-4" /> },
  { label: "Resource Exchange", icon: <TrendingUp className="size-4" /> },
  { label: "Co-Innovation Lab", icon: <GraduationCap className="size-4" /> },
  { label: "Funding & Grants", icon: <Award className="size-4" /> },
  { label: "Events & Webinars", icon: <Calendar className="size-4" /> },
  { label: "News & Updates", icon: <Newspaper className="size-4" /> },
  { label: "Partner Insights", icon: <TrendingUp className="size-4" /> },
];

function PartnersPage() {
  return (
    <AppShell
      title="PARTNERS & ORGANIZATIONS"
      subtitle="Stronger together. Greater impact. One Kingdom. Many partners. Infinite impact."
      side={
        <div className="space-y-4">
          <SideNav heading="Partnership Navigation" items={NAV} />
          <Panel title="Partnership Impact">
            <Donut value={84} label="Excellent" color="var(--accent-cyan)" size={130} />
            <ul className="mt-3 space-y-1 text-[11px]">
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Lives Impacted</span><span>24.7M</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Projects Supported</span><span>286</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">Countries Reached</span><span>112</span></li>
              <li className="flex justify-between gap-4"><span className="text-muted-foreground">SDGs Advanced</span><span>15/17</span></li>
            </ul>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Total Partners", "1,248", "+18% Q"],
            ["Organizations", "684", "+14% Q"],
            ["Countries", "112", "+9% Q"],
            ["Active Collabs", "356", "+21% Q"],
            ["Projects Together", "276", "+17% Q"],
            ["Funding Mobilized", "$412M", "+23% Q"],
          ].map(([v, l, d]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="font-display text-2xl text-cyan">{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_400px]">
        <Panel title="Global Partner Network">
          <GlobeMap caption="North America · Latin America · Europe · Africa · Asia · Oceania" />
        </Panel>
        <Panel title="Partner Categories">
          <div className="flex items-center gap-3">
            <Donut value={100} label="1,248" color="var(--accent-cyan)" size={130} />
            <ul className="space-y-1 text-[11px]">
              {[
                ["NGOs / Nonprofits", "356 (28%)", "emerald"],
                ["Government", "248 (20%)", "cyan"],
                ["Academia / Research", "186 (15%)", "violet"],
                ["Private Sector", "298 (24%)", "gold"],
                ["Faith-Based Org", "110 (9%)", "rose"],
                ["Other", "50 (4%)", "blue"],
              ].map(([l, v, c]) => (
                <li key={l} className="flex justify-between gap-4"><span style={{ color: `var(--accent-${c})` }}>● {l}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>

      <Panel title="Featured Partners">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["WHO", "Global Health", "12"],
            ["UN Environment", "Environment", "9"],
            ["MIT Media Lab", "Research & Innovation", "7"],
            ["Tesla Foundation", "Clean Energy", "5"],
            ["African Union", "Regional Alliance", "8"],
            ["Gates Foundation", "Philanthropy", "14"],
          ].map(([n, c, p]) => (
            <div key={n} className="panel p-3">
              <div className="text-sm font-semibold">{n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-cyan">{c}</div>
              <div className="mt-2 flex items-baseline justify-between text-[10px] text-muted-foreground">
                <span>Active Projects</span><span className="text-foreground">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Partnership Health">
          <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
            {[["Engagement", "92%"], ["Collaboration", "88%"], ["Satisfaction", "94%"], ["Trust Index", "91%"]].map(([l, v]) => (
              <div key={l} className="panel p-2"><div className="font-display text-lg text-cyan">{v}</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">{l}</div></div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-emerald">↑ 11% improvement across all metrics</div>
        </Panel>
        <Panel title="Upcoming Partner Events">
          <ul className="space-y-2 text-xs">
            {[
              ["JUN 05", "Global Health Collaboration Summit", "Virtual · 10:00 UTC"],
              ["JUN 12", "Sustainable Cities Roundtable", "Nairobi · 09:00 EAT"],
              ["JUN 18", "AI for Good Global Forum", "Geneva · 11:00 CEST"],
              ["JUN 25", "Faith & Action for Climate", "New York · 14:00 EDT"],
            ].map(([d, t, w]) => (
              <li key={t} className="flex items-center gap-3 border-b border-panel-border/60 pb-1.5">
                <div className="grid size-10 place-items-center rounded-md bg-white/5 text-[10px] font-bold text-cyan">{d}</div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold">{t}</div>
                  <div className="text-[10px] text-muted-foreground">{w}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Partnership Opportunities">
          <ul className="space-y-2 text-xs">
            {[
              ["Clean Water Initiative", "Implementation Partners", "High Impact"],
              ["AI for Education", "R&D Partners", "Innovation"],
              ["Green Energy Access", "Funding & Technical", "Urgent"],
              ["Food Security Network", "Regional Partners", "High Impact"],
            ].map(([t, s, tag]) => (
              <li key={t} className="panel p-2">
                <div className="text-[11px] font-semibold">{t}</div>
                <div className="flex justify-between text-[10px] text-muted-foreground"><span>{s}</span><span className="text-cyan">{tag}</span></div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Resource Exchange">
          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div className="panel p-2"><div className="font-display text-lg text-cyan">125</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Resources Shared</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-violet">78</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Requests Fulfilled</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-gold">$24.7M</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">In-Kind</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-emerald">342</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Orgs Engaged</div></div>
          </div>
        </Panel>
        <Panel title="Top Collaborations">
          <ul className="space-y-2 text-xs">
            {[
              ["Global Vaccine Access Initiative", 92],
              ["Renewable Energy for All", 78],
              ["Education for Future Leaders", 65],
              ["Ocean Protection Alliance", 58],
            ].map(([t, v]) => (
              <li key={t as string}>
                <div className="flex justify-between"><span>{t as string}</span><span>{v as number}%</span></div>
                <BarRow label="" value={v as number} color="var(--accent-cyan)" />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}
