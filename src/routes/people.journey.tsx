import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";
import { Pipeline, BarRow, Donut } from "@/components/aeon/Widgets";
import { Sprout, BookOpen, Sparkles, Heart, Users, Crown } from "lucide-react";

export const Route = createFileRoute("/people/journey")({
  head: () => ({ meta: [{ title: "Spiritual Journey — People & Discipleship" }] }),
  component: () => (
    <>
      <Panel title="Personal Spiritual Journey">
        <Pipeline
          steps={[
            { label: "Seeking", sub: "Curious hearts", color: "var(--accent-cyan)", icon: <Sparkles className="size-4" /> },
            { label: "Finding", sub: "First encounter", color: "var(--accent-violet)", icon: <BookOpen className="size-4" /> },
            { label: "Following", sub: "Committed walk", color: "var(--accent-emerald)", icon: <Sprout className="size-4" /> },
            { label: "Serving", sub: "Kingdom hands", color: "var(--accent-gold)", icon: <Heart className="size-4" /> },
            { label: "Leading", sub: "Multiplying disciples", color: "var(--accent-rose)", icon: <Users className="size-4" /> },
            { label: "Legacy", sub: "Generations forward", color: "var(--accent-blue)", icon: <Crown className="size-4" /> },
          ]}
        />
      </Panel>
      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Journey Health">
          <Donut value={82} label="Vibrant" color="var(--accent-emerald)" size={140} />
        </Panel>
        <Panel title="Spiritual Rhythms" className="lg:col-span-2">
          <div className="space-y-2">
            <BarRow label="Daily Prayer" value={78} color="var(--accent-violet)" />
            <BarRow label="Scripture Reading" value={84} color="var(--accent-blue)" />
            <BarRow label="Worship" value={72} color="var(--accent-rose)" />
            <BarRow label="Fellowship" value={69} color="var(--accent-cyan)" />
            <BarRow label="Fasting" value={41} color="var(--accent-gold)" />
            <BarRow label="Witnessing" value={57} color="var(--accent-emerald)" />
          </div>
        </Panel>
      </div>
    </>
  ),
});
