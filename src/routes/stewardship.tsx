import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, GlobeMap } from "@/components/aeon/Widgets";
import {
  Leaf, TreePine, Droplet, Sun, Recycle, Sprout, Globe2, Shield,
  LayoutDashboard, BookOpen, FileText, Scale,
} from "lucide-react";

export const Route = createFileRoute("/stewardship")({
  head: () => ({ meta: [{ title: "Stewardship & Creation — AEON GENESIS OS" }] }),
  component: StewardshipPage,
});

const NAV = [
  { label: "Stewardship Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Climate & Environment", icon: <Sun className="size-4" /> },
  { label: "Ecosystems & Biodiversity", icon: <TreePine className="size-4" /> },
  { label: "Water Stewardship", icon: <Droplet className="size-4" /> },
  { label: "Land & Soil Health", icon: <Sprout className="size-4" /> },
  { label: "Renewable Energy", icon: <Sun className="size-4" /> },
  { label: "Sustainable Communities", icon: <Globe2 className="size-4" /> },
  { label: "Waste & Circular Economy", icon: <Recycle className="size-4" /> },
  { label: "Creation Projects", icon: <Leaf className="size-4" /> },
  { label: "Resources & Tools", icon: <BookOpen className="size-4" /> },
  { label: "Scholars & Research", icon: <FileText className="size-4" /> },
  { label: "Policies & Advocacy", icon: <Scale className="size-4" /> },
];

function StewardshipPage() {
  return (
    <AppShell
      title="STEWARDSHIP & CREATION"
      subtitle="Caring for God's Creation. Building a Sustainable Future for Generations."
      side={
        <div className="space-y-4">
          <SideNav heading="Creation Navigation" items={NAV} />
          <Panel>
            <div className="text-[10px] uppercase tracking-widest text-emerald">Creation Verse</div>
            <p className="mt-2 text-xs italic leading-relaxed">"The earth is the LORD's, and everything in it, the world, and all who live in it."</p>
            <div className="mt-1 text-[11px] text-emerald">Psalm 24:1</div>
          </Panel>
          <Panel title="Prayer for Creation">
            <p className="text-xs text-muted-foreground">Creator God, you spoke and the earth was formed. Help us to be faithful stewards of your wonderful creation.</p>
            <button className="mt-3 w-full rounded-md border border-emerald/40 bg-emerald/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald">🌿 Pray Now</button>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[["Worship", "with Creation", "text-emerald", TreePine], ["Protect", "Biodiversity", "text-cyan", Shield], ["Restore", "Ecosystems", "text-emerald", Sprout], ["Sustain", "Resources", "text-blue", Droplet], ["Educate", "Communities", "text-violet", BookOpen], ["Innovate", "Green Solutions", "text-gold", Sun]].map(([t, s, c, I]) => {
            const Icon = I as any;
            return (
              <div key={t as string} className="text-center">
                <div className={`mx-auto grid size-12 place-items-center rounded-full bg-white/5 ${c as string} ring-1 ring-current/40`}><Icon className="size-5" /></div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider">{t as string}</div>
                <div className="text-[10px] text-muted-foreground">{s as string}</div>
              </div>
            );
          })}
        </div>
      </Panel>

      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["128,450", "Carbon Reduced (tCO2e)", "+24.6%"],
            ["2.4M", "Trees Planted", "+32.1%"],
            ["1.8B L", "Water Saved", "+18.7%"],
            ["45,320 ha", "Land Restored", "+20.4%"],
            ["856", "Communities Impacted", "+15.3%"],
            ["92/100", "Creation Score", "+8.5%"],
          ].map(([v, l, d]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="font-display text-xl">{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px_320px]">
        <Panel title="Creation Impact Map">
          <GlobeMap caption="Live · high, medium and emerging impact regions" />
        </Panel>
        <Panel title="Impact Overview">
          <div className="flex items-center gap-3">
            <Donut value={78} label="Impact" color="var(--accent-emerald)" size={130} />
            <ul className="space-y-1 text-xs">
              {[["Climate & Energy", "35%"], ["Ecosystems", "25%"], ["Water", "15%"], ["Land & Food", "15%"], ["Waste & Circular", "10%"]].map(([l, v]) => (
                <li key={l} className="flex justify-between gap-3"><span className="text-muted-foreground">{l}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        </Panel>
        <Panel title="Top Creation Projects">
          {[["Great Green Wall Initiative", "Restoring ecosystems in Africa", "85%"], ["Clean Water for All", "Safe water access", "72%"], ["Renewable Energy Villages", "Off-grid empowerment", "68%"], ["Ocean Cleanup Mission", "Protecting marine ecosystems", "63%"]].map(([n, d, p]) => (
            <div key={n} className="mb-2 border-b border-panel-border/60 pb-2 last:border-0">
              <div className="text-sm font-semibold">{n}</div>
              <div className="text-[10px] text-muted-foreground">{d}</div>
              <div className="mt-1 h-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald" style={{ width: p }} /></div>
            </div>
          ))}
        </Panel>
      </div>

      <Panel title="Planet Health Index">
        <div className="flex flex-wrap items-center gap-6">
          <Donut value={87} label="Health" color="var(--accent-emerald)" size={160} />
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs">
            {[["Climate Stability", 82], ["Biodiversity", 86], ["Water Security", 89], ["Land Health", 84], ["Air Quality", 88], ["Oceans Health", 85]].map(([l, v]) => (
              <li key={l as string} className="flex justify-between gap-4"><span className="flex items-center gap-2 text-muted-foreground"><span className="size-2 rounded-full bg-emerald" />{l}</span><span>{v}</span></li>
            ))}
          </ul>
        </div>
      </Panel>
    </AppShell>
  );
}
