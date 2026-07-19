import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";
import { Star } from "lucide-react";

export const Route = createFileRoute("/people/milestones")({
  head: () => ({ meta: [{ title: "Milestones — People & Discipleship" }] }),
  component: () => (
    <Panel title="Recent Milestones">
      <ul className="space-y-3">
        {[
          ["Baptism", "Sofia P. — Argentina", "Today"],
          ["First-time Salvation", "Kwame A. — Ghana", "2h ago"],
          ["Completed Foundations Track", "Aiko N. — Japan", "Yesterday"],
          ["Ordained as Elder", "David M. — India", "3 days ago"],
          ["Planted a new house church", "The Okafor family — Nigeria", "1 week ago"],
        ].map(([t, w, tm]) => (
          <li key={w} className="panel flex items-center gap-3 p-3">
            <Star className="size-5 text-gold" />
            <div className="flex-1">
              <div className="text-sm font-semibold">{t}</div>
              <div className="text-[11px] text-muted-foreground">{w}</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{tm}</div>
          </li>
        ))}
      </ul>
    </Panel>
  ),
});
