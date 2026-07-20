import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow } from "@/components/aeon/Widgets";
import {
  Bot, Workflow, Sparkles, Brain, Zap, Network, Cpu, ShieldCheck,
  Layers, MessageSquare, Activity, LayoutDashboard,
} from "lucide-react";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({ meta: [{ title: "AI & Automation — AEON GENESIS OS" }] }),
  component: AIAutomationPage,
});

const NAV = [
  { label: "AI Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "AI Agents", icon: <Bot className="size-4" /> },
  { label: "Automation Workflows", icon: <Workflow className="size-4" /> },
  { label: "Model Management", icon: <Brain className="size-4" /> },
  { label: "Prompt Studio", icon: <Sparkles className="size-4" /> },
  { label: "AI Integrations", icon: <Network className="size-4" /> },
  { label: "RPA Center", icon: <Cpu className="size-4" /> },
  { label: "Decision Intelligence", icon: <Activity className="size-4" /> },
  { label: "AI Monitoring", icon: <Activity className="size-4" /> },
  { label: "AI Governance", icon: <ShieldCheck className="size-4" /> },
  { label: "Experiment Lab", icon: <Zap className="size-4" /> },
  { label: "Knowledge Graph", icon: <Layers className="size-4" /> },
  { label: "AI Marketplace", icon: <MessageSquare className="size-4" /> },
];

function AIAutomationPage() {
  return (
    <AppShell
      title="AI & AUTOMATION COMMAND CENTER"
      subtitle="Empowering Kingdom impact through intelligent systems and automated excellence."
      side={
        <div className="space-y-4">
          <SideNav heading="AI Navigation" items={NAV} />
          <Panel title="AI System Status">
            <div className="flex items-center gap-3">
              <Donut value={98} label="Operational" color="var(--accent-emerald)" size={100} />
              <ul className="space-y-1 text-[11px]">
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Services Online</span><span>48/48</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Automations Active</span><span>256</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Agents Running</span><span>128</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Success Rate</span><span>98.6%</span></li>
                <li className="flex justify-between gap-4"><span className="text-muted-foreground">Tasks Today</span><span>15,432</span></li>
              </ul>
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["AI Agents", "128", "+23 this week", "text-cyan"],
            ["Automations", "256", "+31 this week", "text-violet"],
            ["Tasks Executed", "15,432", "+18.7% this week", "text-blue"],
            ["Time Saved", "2,456 hrs", "+22.4% this week", "text-emerald"],
            ["Accuracy", "98.6%", "+2.1% this week", "text-gold"],
            ["Impact Score", "92/100", "Excellent", "text-cyan"],
          ].map(([v, l, d, c]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className={`font-display text-2xl ${c}`}>{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_460px]">
        <Panel title="AI Agent Ecosystem">
          <div className="relative mx-auto grid aspect-square max-w-md grid-cols-3 grid-rows-3 gap-2">
            {[
              ["Analyze", "cyan"],
              ["", ""],
              ["Decide", "violet"],
              ["", ""],
              ["Aeon AI Core", "gold"],
              ["", ""],
              ["Perceive", "emerald"],
              ["", ""],
              ["Learn", "blue"],
            ].map(([label, tone], i) =>
              label ? (
                <div
                  key={i}
                  className={`panel grid place-items-center p-3 text-center text-[10px] font-semibold uppercase tracking-widest`}
                  style={{ borderColor: `var(--accent-${tone})55`, color: `var(--accent-${tone})` }}
                >
                  {label === "Aeon AI Core" ? (
                    <>
                      <div className="text-lg">✦</div>
                      <div>{label}</div>
                      <div className="text-[9px] text-muted-foreground">Orchestrator</div>
                    </>
                  ) : (
                    label
                  )}
                </div>
              ) : (
                <div key={i} />
              ),
            )}
          </div>
          <div className="mt-2 text-center text-[10px] text-muted-foreground">Perceive · Analyze · Decide · Act · Learn</div>
        </Panel>
        <Panel title="Automation Workflows">
          <ul className="space-y-2 text-xs">
            {[
              ["New Member Onboarding", "2,345 execs", "98.7%", "124 hrs saved"],
              ["Donation Processing", "1,892 execs", "99.1%", "86 hrs saved"],
              ["Content Publication", "567 execs", "97.8%", "43 hrs saved"],
              ["Follow-up & Engagement", "3,456 execs", "98.2%", "112 hrs saved"],
              ["Report Generation", "234 execs", "100%", "28 hrs saved"],
            ].map(([n, e, s, h]) => (
              <li key={n} className="panel flex items-center justify-between p-2.5">
                <div>
                  <div className="text-[11px] font-semibold">{n}</div>
                  <div className="text-[10px] text-muted-foreground">{e}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-emerald">{s}</div>
                  <div className="text-[10px] text-muted-foreground">{h}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Top AI Agents">
          <ul className="space-y-2 text-xs">
            {[
              ["Kingdom Insight Agent", "96%", "+12%"],
              ["Discipleship Coach", "94%", "+8%"],
              ["Content Creator AI", "92%", "+15%"],
              ["Community Connector", "91%", "+6%"],
              ["Resource Optimizer", "90%", "+10%"],
            ].map(([n, a, d]) => (
              <li key={n} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{n}</span>
                <span><span className="font-display text-sm">{a}</span> <span className="text-[10px] text-emerald">{d}</span></span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="AI Model Management">
          <ul className="space-y-2 text-xs">
            {[
              ["KingdomGPT v2.1", "98%", "Active"],
              ["VisionCore v1.8", "96%", "Active"],
              ["Predicta v3.2", "94%", "Active"],
              ["InsightFlow v1.5", "91%", "Training"],
              ["Sentinel v2.0", "97%", "Active"],
            ].map(([n, a, s]) => (
              <li key={n} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{n}</span>
                <span><span className="font-display text-sm">{a}</span> <span className="text-[10px] text-cyan">{s}</span></span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="AI Governance">
          <div className="space-y-2">
            <BarRow label="Ethical Guidelines" value={100} color="var(--accent-emerald)" />
            <BarRow label="Bias & Fairness" value={96} color="var(--accent-violet)" />
            <BarRow label="Model Transparency" value={94} color="var(--accent-cyan)" />
            <BarRow label="Data Privacy" value={99} color="var(--accent-gold)" />
            <BarRow label="Security & Access" value={97} color="var(--accent-rose)" />
          </div>
        </Panel>
      </div>

      <Panel title="Automation Impact Pipeline">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {[
            ["$412K", "Cost Saved", "gold"],
            ["5,678", "Hours Saved", "cyan"],
            ["12.4K", "People Impacted", "violet"],
            ["98.6%", "Efficiency Gain", "emerald"],
            ["Kingdom", "Advanced", "rose"],
          ].map(([v, l, tone], i, arr) => (
            <div key={l} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-display text-xl" style={{ color: `var(--accent-${tone})` }}>{v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
              {i < arr.length - 1 && <div className="text-muted-foreground">›</div>}
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
