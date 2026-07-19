import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow } from "@/components/aeon/Widgets";
import { Sparkles, Brain, MessageSquare, TrendingUp, Shield, Workflow } from "lucide-react";

export const Route = createFileRoute("/intelligence")({
  head: () => ({ meta: [{ title: "Intelligence — AEON GENESIS OS" }] }),
  component: () => (
    <AppShell title="INTELLIGENCE" subtitle="The Aeon Brain. Wisdom, insight, and discernment at scale.">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="AI Brain Capabilities">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              [Brain, "Natural Language", "Understanding, generation, translation across 100+ languages"],
              [TrendingUp, "Predictive Analytics", "Forecasting kingdom trends, needs and opportunities"],
              [Sparkles, "Personalization", "Adaptive learning journeys for every disciple"],
              [Workflow, "Automation", "Smart workflows across every ministry function"],
              [MessageSquare, "Knowledge Graph", "195M+ entities of biblical and contextual intelligence"],
              [Shield, "Ethics & Safety", "Guardrails, alignment and biblical soundness checks"],
            ].map(([I, t, d]) => {
              const Icon = I as any;
              return (
                <div key={t as string} className="panel p-4">
                  <Icon className="size-5 text-cyan" />
                  <div className="mt-2 text-sm font-semibold">{t as string}</div>
                  <div className="text-xs text-muted-foreground">{d as string}</div>
                </div>
              );
            })}
          </div>
        </Panel>
        <Panel title="Intelligence Health">
          <Donut value={94} label="Aligned" color="var(--accent-cyan)" size={160} />
          <div className="mt-3 space-y-2">
            <BarRow label="Model Accuracy" value={96} color="var(--accent-emerald)" />
            <BarRow label="Latency" value={88} color="var(--accent-blue)" />
            <BarRow label="Bias Guardrails" value={92} color="var(--accent-violet)" />
            <BarRow label="Biblical Alignment" value={97} color="var(--accent-gold)" />
          </div>
        </Panel>
      </div>
      <Panel title="Real-Time Signal Stream">
        <ul className="space-y-2 text-xs">
          {[
            ["Awakening detected in East Africa — increase resource allocation", "AI recommendation"],
            ["Unreached people group identified in South Asia", "Pattern detection"],
            ["Church planting model in Brazil showing 3.2x multiplication", "Trend insight"],
            ["Health crisis anticipated in Southeast Asia — mobilize response teams", "Predictive alert"],
          ].map(([t, s]) => (
            <li key={t} className="panel flex items-center justify-between p-2"><span>{t}</span><span className="text-[10px] uppercase tracking-widest text-cyan">{s}</span></li>
          ))}
        </ul>
      </Panel>
    </AppShell>
  ),
});
