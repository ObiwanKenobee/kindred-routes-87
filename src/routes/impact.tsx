import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, GlobeMap, BarRow } from "@/components/aeon/Widgets";
import {
  LayoutDashboard, Globe2, MapPin, Layers, Target, Users, DollarSign,
  Heart, BookOpen, Activity, Handshake, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({ meta: [{ title: "Global Impact — AEON GENESIS OS" }] }),
  component: ImpactPage,
});

const NAV = [
  { label: "Impact Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Global Projects", icon: <Globe2 className="size-4" /> },
  { label: "Country Hubs", icon: <MapPin className="size-4" /> },
  { label: "Project Categories", icon: <Layers className="size-4" /> },
  { label: "SDG Alignment", icon: <Target className="size-4" /> },
  { label: "Impact Partners", icon: <Handshake className="size-4" /> },
  { label: "Donor & Funding", icon: <DollarSign className="size-4" /> },
  { label: "Stories of Change", icon: <Sparkles className="size-4" /> },
  { label: "Reports & Analytics", icon: <Activity className="size-4" /> },
  { label: "Community Action", icon: <Users className="size-4" /> },
  { label: "Volunteers", icon: <Heart className="size-4" /> },
  { label: "Pray for the Nations", icon: <BookOpen className="size-4" /> },
];

const SDGS: [number, string, number, string][] = [
  [1, "No Poverty", 86, "rose"],
  [2, "Hunger", 79, "gold"],
  [3, "Health & Wellbeing", 91, "emerald"],
  [4, "Quality Education", 88, "rose"],
  [5, "Gender Equality", 82, "gold"],
  [6, "Clean Water", 78, "cyan"],
  [7, "Clean Energy", 76, "gold"],
  [8, "Decent Work", 83, "rose"],
  [9, "Innovation & Infra", 74, "gold"],
  [10, "Reduced Inequalities", 71, "rose"],
  [11, "Sustainable Cities", 75, "gold"],
  [12, "Responsible Consumption", 73, "gold"],
  [13, "Climate Action", 89, "emerald"],
  [14, "Life Below Water", 87, "cyan"],
  [15, "Life on Land", 84, "emerald"],
  [16, "Peace & Justice", 80, "blue"],
  [17, "Partnerships", 89, "blue"],
];

function ImpactPage() {
  return (
    <AppShell
      title="GLOBAL IMPACT PROJECTS"
      subtitle="Love in Action. Hope in Motion. Transformation for Generations."
      side={
        <div className="space-y-4">
          <SideNav heading="Impact Navigation" items={NAV} />
          <Panel title="Quick Filters">
            <div className="space-y-2 text-xs">
              {["All Regions", "All Categories", "All Status", "All Impact Areas"].map((f) => (
                <div key={f} className="panel flex items-center justify-between p-2 text-muted-foreground">
                  <span>{f}</span><span>▾</span>
                </div>
              ))}
              <button className="w-full rounded-md bg-gradient-to-r from-cyan/40 to-violet/40 py-2 text-[11px] font-semibold uppercase tracking-widest">Apply Filters</button>
            </div>
          </Panel>
          <Panel title="Kingdom Impact Verse">
            <div className="text-center text-xs italic text-muted-foreground">
              "Declare His glory among the nations, His marvelous works among all the peoples."
              <div className="mt-1 text-cyan">Psalm 96:3</div>
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Active Projects", "1,248", "+18.6%", "text-cyan"],
            ["Countries", "89", "7 new", "text-violet"],
            ["Lives Impacted", "24.7M", "+12.4%", "text-emerald"],
            ["Communities", "5,632", "+9.8%", "text-gold"],
            ["Funds Deployed", "$412M", "+23.1%", "text-rose"],
            ["Transparency", "98.7%", "Excellent", "text-emerald"],
          ].map(([v, l, d, c]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className={`font-display text-2xl ${c}`}>{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px]">
        <Panel title="Impact Around the World">
          <GlobeMap caption="High Impact · Medium Impact · Emerging Impact" />
        </Panel>
        <Panel title="SDG Alignment">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            {SDGS.slice(0, 15).map(([n, name, v, c]) => (
              <div key={n} className="panel p-2 text-center">
                <div className="font-display text-sm" style={{ color: `var(--accent-${c})` }}>{n}</div>
                <div className="truncate text-[9px] text-muted-foreground">{name}</div>
                <div className="text-[9px]">{v}%</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Donut value={82} label="Aligned" color="var(--accent-cyan)" size={80} />
            <div>
              <div className="font-display text-lg text-cyan">Overall Alignment</div>
              <div className="text-[10px] text-emerald">Excellent</div>
            </div>
          </div>
        </Panel>
      </div>

      <Panel title="Featured Global Projects">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {[
            ["Clean Water for All", "Ethiopia, Africa", "Community Dev", "125K", 78],
            ["Hope for Every Child", "India, Asia", "Education", "89K", 62],
            ["Mobile Medical Care", "Brazil, S. America", "Health", "156K", 85],
            ["Reforest Our Earth", "Indonesia, Asia", "Creation Care", "2.4M trees", 71],
            ["Hope in Crisis", "Ukraine, Europe", "Disaster Relief", "210K", 89],
          ].map(([t, l, c, i, p]) => (
            <div key={t as string} className="panel p-3">
              <div className="text-[10px] uppercase tracking-widest text-cyan">{c as string}</div>
              <div className="text-sm font-semibold">{t as string}</div>
              <div className="text-[10px] text-muted-foreground">{l as string}</div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan to-emerald" style={{ width: `${p}%` }} />
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-muted-foreground"><span>{i as string} impacted</span><span>{p as number}% funded</span></div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Impact by Category">
          <ul className="space-y-2 text-xs">
            {[
              ["Education & Literacy", 26, 312, "cyan"],
              ["Health & Wellbeing", 22, 276, "rose"],
              ["Community Development", 16, 198, "violet"],
              ["Water & Sanitation", 13, 156, "blue"],
              ["Poverty Alleviation", 11, 134, "gold"],
              ["Environment & Creation", 8, 102, "emerald"],
              ["Disaster Relief & Hope", 4, 70, "rose"],
            ].map(([l, pct, c, tone]) => (
              <li key={l as string}>
                <div className="flex justify-between text-[11px]"><span>{l as string}</span><span>{c as number} projects · {pct as number}%</span></div>
                <BarRow label="" value={pct as number} color={`var(--accent-${tone})`} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Recent Impact Stories">
          <ul className="space-y-2 text-xs">
            {[
              ["From Darkness to Light", "Kenya, Africa", "A community transformed through education and faith.", "2h"],
              ["Clean Water, New Hope", "Cambodia, Asia", "How clean water changed an entire village.", "1d"],
              ["Healing and Restoration", "Peru, S. America", "Lives healed through mobile medical care.", "2d"],
            ].map(([t, l, d, w]) => (
              <li key={t} className="panel p-3">
                <div className="text-sm font-semibold">{t}</div>
                <div className="text-[10px] text-cyan">{l}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">{d}</div>
                <div className="mt-1 text-[10px] text-muted-foreground">{w} ago</div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="italic text-sm text-muted-foreground">
            "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
            <span className="ml-2 text-emerald">Matthew 28:19</span>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-cyan/40 to-violet/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest">Pray for the Nations</button>
        </div>
      </Panel>
    </AppShell>
  );
}
