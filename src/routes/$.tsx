import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Clock3, Compass } from "lucide-react";
import { AppShell, RouteSideNav } from "@/components/aeon/AppShell";
import { Panel, Stat } from "@/components/aeon/Panel";
import { itemForPath, sectionForPath } from "@/lib/platform-navigation";

export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    const section = sectionForPath(location.pathname);
    const activeItem = section && itemForPath(section, location.pathname);
    if (!section || !activeItem || !activeItem.slug) throw notFound();
    return { section, activeItem };
  },
  head: ({ match }) => {
    const context = match.context as { section?: { label: string }; activeItem?: { label: string } };
    const title = context.activeItem && context.section ? `${context.activeItem.label} — ${context.section.label} — AEON GENESIS OS` : "Platform Feature — AEON GENESIS OS";
    const description = context.activeItem && context.section ? `${context.activeItem.label} workspace within ${context.section.label}.` : "AEON GENESIS OS platform feature.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: FeaturePage,
});

function FeaturePage() {
  const { section, activeItem } = Route.useRouteContext();
  return (
    <AppShell title={activeItem.label.toUpperCase()} subtitle={`${section.label} workspace`} side={<RouteSideNav section={section} />}>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Status" value="Active" delta="Systems nominal" tone="emerald" />
        <Stat label="Open Items" value="24" delta="6 updated today" tone="cyan" />
        <Stat label="Collaborators" value="128" delta="Across 12 regions" tone="violet" />
        <Stat label="Completion" value="78%" delta="On track" tone="gold" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title={`${activeItem.label} Workspace`} accent="cyan">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              [Compass, "Current priorities", `Review and coordinate active ${activeItem.label.toLowerCase()} initiatives.`],
              [CheckCircle2, "Completed outcomes", "Validated milestones and recent progress are available here."],
              [Clock3, "Upcoming activity", "Scheduled reviews, decisions, and follow-up work."],
              [ArrowUpRight, "Connected systems", `Related workflows across ${section.label} remain linked.`],
            ].map(([IconValue, title, detail]) => {
              const Icon = IconValue as typeof Compass;
              return <div key={title as string} className="panel p-4"><Icon className="size-5 text-cyan" /><h2 className="mt-3 text-sm font-semibold">{title as string}</h2><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail as string}</p></div>;
            })}
          </div>
        </Panel>
        <Panel title="Recent Activity">
          <ul className="space-y-3 text-sm">
            {["Workspace review completed", "New insight added", "Team update shared", "Next milestone scheduled"].map((label, index) => <li key={label} className="flex gap-3 border-b border-panel-border/60 pb-3 last:border-0"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-cyan" /><span><span className="block">{label}</span><span className="text-xs text-muted-foreground">{index + 1} day{index ? "s" : ""} ago</span></span></li>)}
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}