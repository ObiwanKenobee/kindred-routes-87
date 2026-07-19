import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";

const PATHS = [
  { name: "Foundations", desc: "For new believers — grace, identity, prayer basics", lessons: 12, color: "text-cyan" },
  { name: "Growth", desc: "Spiritual formation through Scripture and rhythms", lessons: 24, color: "text-emerald" },
  { name: "Leadership", desc: "Character, skills and calling for kingdom leaders", lessons: 36, color: "text-violet" },
  { name: "Multiplication", desc: "Training disciple-makers who make disciples", lessons: 24, color: "text-gold" },
  { name: "Marketplace", desc: "Faith in business, work and creativity", lessons: 18, color: "text-blue" },
  { name: "Missions", desc: "Cross-cultural service and church planting", lessons: 30, color: "text-rose" },
];

export const Route = createFileRoute("/people/pathways")({
  head: () => ({ meta: [{ title: "Discipleship Pathways — People & Discipleship" }] }),
  component: () => (
    <Panel title="All Pathways">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {PATHS.map((p) => (
          <div key={p.name} className="panel p-4">
            <div className={`text-xs font-bold uppercase tracking-wider ${p.color}`}>{p.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
            <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">{p.lessons} Lessons</div>
            <button className="mt-3 w-full rounded-md border border-cyan/40 bg-cyan/10 px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan">Start</button>
          </div>
        ))}
      </div>
    </Panel>
  ),
});
