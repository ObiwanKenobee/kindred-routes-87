import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { GlobeMap, Donut, BarRow } from "@/components/aeon/Widgets";

export const Route = createFileRoute("/impact")({
  head: () => ({ meta: [{ title: "Impact — AEON GENESIS OS" }] }),
  component: () => (
    <AppShell title="GLOBAL IMPACT" subtitle="Measuring what matters for eternity.">
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {[["2.0B+", "Lives Impacted"], ["150M+", "Active Disciples"], ["50M+", "Social Enterprises"], ["$1.2T+", "Economic Impact"], ["100M+", "Children Educated"], ["1B+", "Trees Planted"], ["500M+", "People Served"], ["200+", "Countries Reached"]].map(([v, l]) => (
            <div key={l}><div className="font-display text-xl text-cyan">{v}</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div></div>
          ))}
        </div>
      </Panel>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_400px]">
        <Panel title="Global Impact Distribution"><GlobeMap /></Panel>
        <Panel title="Impact Health">
          <Donut value={91} label="Kingdom" color="var(--accent-cyan)" size={140} />
          <div className="mt-3 space-y-2">
            <BarRow label="Spiritual Impact" value={94} color="var(--accent-cyan)" />
            <BarRow label="Social Impact" value={88} color="var(--accent-violet)" />
            <BarRow label="Economic Impact" value={83} color="var(--accent-gold)" />
            <BarRow label="Environmental Impact" value={87} color="var(--accent-emerald)" />
          </div>
        </Panel>
      </div>
      <Panel title="Featured Impact Projects">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["1,000 Wells", "Clean water for East Africa", "Progress 62%"],
            ["Digital Academy", "500K children educated", "Ongoing"],
            ["Farm to Family", "Food security in South Asia", "Progress 78%"],
            ["Trauma Care Network", "Global mental health support", "Launching"],
            ["Solar Village Initiative", "Rural energy for Africa", "Progress 55%"],
            ["Peace Ambassadors", "Reconciliation training", "Ongoing"],
          ].map(([t, d, p]) => (
            <div key={t} className="panel p-3">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-xs text-muted-foreground">{d}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-cyan">{p}</div>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  ),
});
