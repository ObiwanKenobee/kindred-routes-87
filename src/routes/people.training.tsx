import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";

function make(title: string, items: [string, string][]) {
  return (
    <Panel title={title}>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([n, d]) => (
          <div key={n} className="panel p-4">
            <div className="text-sm font-semibold text-foreground">{n}</div>
            <div className="mt-1 text-xs text-muted-foreground">{d}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export const training = createFileRoute("/people/training")({
  head: () => ({ meta: [{ title: "Training & Resources" }] }),
  component: () => make("Training & Resources", [
    ["Bible 101", "Core scripture foundations"],
    ["Prayer Life", "Practical daily rhythms"],
    ["Leadership Essentials", "Character and competency"],
    ["Evangelism Toolkit", "Sharing faith winsomely"],
    ["Discipleship 1:1", "Guided mentoring flow"],
    ["Kingdom Business", "Faith at work"],
  ]),
});

export const Route = training;
