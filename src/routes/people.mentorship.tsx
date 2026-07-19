import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";
import { BarRow, Donut } from "@/components/aeon/Widgets";

export const Route = createFileRoute("/people/mentorship")({
  head: () => ({ meta: [{ title: "Mentorship — People & Discipleship" }] }),
  component: () => (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          ["Active Mentors", "24,712", "text-cyan"],
          ["Active Mentees", "184,930", "text-violet"],
          ["Sessions this month", "62,148", "text-emerald"],
        ].map(([l, v, c]) => (
          <Panel key={l}><div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div><div className={`mt-1 font-display text-3xl ${c}`}>{v}</div></Panel>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <Panel title="Mentor Match Score"><Donut value={94} label="Match" color="var(--accent-violet)" size={160} /></Panel>
        <Panel title="Mentorship Effectiveness">
          <div className="space-y-2">
            <BarRow label="Spiritual Growth" value={92} color="var(--accent-emerald)" />
            <BarRow label="Character Development" value={88} color="var(--accent-cyan)" />
            <BarRow label="Calling Clarity" value={81} color="var(--accent-violet)" />
            <BarRow label="Ministry Skills" value={76} color="var(--accent-gold)" />
            <BarRow label="Leadership Readiness" value={69} color="var(--accent-rose)" />
          </div>
        </Panel>
      </div>
    </>
  ),
});
