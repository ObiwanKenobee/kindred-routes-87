import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";

export const Route = createFileRoute("/people/assignments")({
  head: () => ({ meta: [{ title: "Assignments — People & Discipleship" }] }),
  component: () => (
    <Panel title="Active Assignments">
      <ul className="divide-y divide-panel-border/60 text-sm">
        {[
          ["Read Romans 8", "Due today", "text-emerald"],
          ["Meet with mentee — Grace M.", "Tomorrow, 3pm", "text-cyan"],
          ["Prepare group study on Ephesians", "This week", "text-violet"],
          ["Serve at community outreach", "Saturday", "text-gold"],
          ["Fast & pray for the nations", "Ongoing", "text-rose"],
        ].map(([t, d, c]) => (
          <li key={t} className="flex items-center justify-between py-3">
            <span>{t}</span>
            <span className={`text-xs ${c}`}>{d}</span>
          </li>
        ))}
      </ul>
    </Panel>
  ),
});
