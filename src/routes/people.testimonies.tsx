import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";

export const Route = createFileRoute("/people/testimonies")({
  head: () => ({ meta: [{ title: "Testimony & Stories — People & Discipleship" }] }),
  component: () => (
    <div className="grid gap-5 md:grid-cols-2">
      {[
        ["Maria S. · Brazil", "I was lost and broken, but Jesus changed my life completely. Now I'm helping others find hope."],
        ["Daniel K. · Kenya", "Through discipleship, I discovered my purpose and started a ministry in my community."],
        ["Aisha T. · Philippines", "God is moving on our campus! 12 of my friends accepted Jesus this month."],
        ["Emeka O. · Nigeria", "Our house church multiplied into 6 gatherings in less than a year."],
      ].map(([n, q]) => (
        <Panel key={n}>
          <div className="italic text-muted-foreground">"{q}"</div>
          <div className="mt-2 text-xs font-semibold text-cyan">— {n}</div>
        </Panel>
      ))}
    </div>
  ),
});
