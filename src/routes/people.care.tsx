import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";

export const Route = createFileRoute("/people/care")({
  head: () => ({ meta: [{ title: "Care & Follow-up — People & Discipleship" }] }),
  component: () => (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {[["24", "People need prayer", "text-cyan"], ["18", "Follow-up needed", "text-violet"], ["7", "Urgent care requests", "text-rose"]].map(([v, l, c]) => (
          <Panel key={l}><div className={`font-display text-3xl ${c}`}>{v}</div><div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div></Panel>
        ))}
      </div>
      <Panel title="Recent Care Interactions">
        <ul className="divide-y divide-panel-border/60 text-sm">
          {[
            ["Prayer call with James O.", "12 min ago"],
            ["Care visit — Ana R. (post-surgery)", "2h ago"],
            ["Grief counseling — Youth group", "Yesterday"],
            ["Marriage coaching — Mensah family", "2 days ago"],
          ].map(([t, w]) => (
            <li key={t} className="flex items-center justify-between py-3">
              <span>{t}</span><span className="text-xs text-muted-foreground">{w}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  ),
});
