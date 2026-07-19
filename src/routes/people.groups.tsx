import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";
import { Donut, GlobeMap } from "@/components/aeon/Widgets";
import { Users } from "lucide-react";

export const Route = createFileRoute("/people/groups")({
  head: () => ({ meta: [{ title: "Groups & Communities — People & Discipleship" }] }),
  component: () => (
    <>
      <div className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <Panel title="Group Composition">
          <Donut value={68} label="Active" color="var(--accent-cyan)" size={160} />
          <ul className="mt-3 space-y-1 text-xs">
            {[["Small Groups", 1247, "cyan"], ["House Churches", 892, "violet"], ["Missional", 634, "emerald"], ["Youth", 521, "gold"], ["Marketplace", 318, "rose"]].map(([l, v, c]) => (
              <li key={l as string} className="flex justify-between border-b border-panel-border/60 pb-1 last:border-0">
                <span className={`text-${c}`}>{l as string}</span>
                <span>{(v as number).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Global Community Density">
          <GlobeMap caption="89,412 active communities across 195 countries" />
        </Panel>
      </div>
      <Panel title="Featured Groups">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["Kingdom Leaders Global", "32 Members · Active now"],
            ["Youth Discipleship Hub", "28 Members · Active now"],
            ["Women of Purpose", "21 Members · Active now"],
            ["Bible Scholars Community", "45 Members · Active now"],
            ["Marketplace Ministers", "17 Members"],
            ["Prayer Warriors Network", "112 Members"],
          ].map(([n, m]) => (
            <div key={n} className="panel p-3">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-cyan" />
                <div className="text-sm font-semibold">{n}</div>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{m}</div>
            </div>
          ))}
        </div>
      </Panel>
    </>
  ),
});
