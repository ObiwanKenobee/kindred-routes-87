import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow, Pipeline } from "@/components/aeon/Widgets";
import {
  Heart, Brain, Cross, Users, Activity, Moon, Droplet, Salad, Zap,
  LayoutDashboard, Calendar, Phone, FileText, ClipboardList, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/health")({
  head: () => ({ meta: [{ title: "Health & Wellbeing — AEON GENESIS OS" }] }),
  component: HealthPage,
});

const NAV = [
  { label: "Health Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Physical Health", icon: <Activity className="size-4" /> },
  { label: "Mental Health", icon: <Brain className="size-4" /> },
  { label: "Spiritual Health", icon: <Cross className="size-4" /> },
  { label: "Nutrition & Lifestyle", icon: <Salad className="size-4" /> },
  { label: "Preventive Care", icon: <Sparkles className="size-4" /> },
  { label: "Community Care", icon: <Users className="size-4" /> },
  { label: "Health Records", icon: <FileText className="size-4" /> },
  { label: "Appointments", icon: <Calendar className="size-4" /> },
  { label: "Telehealth", icon: <Phone className="size-4" /> },
  { label: "Care Teams", icon: <Heart className="size-4" /> },
  { label: "Resources & Articles", icon: <FileText className="size-4" /> },
  { label: "Challenges & Goals", icon: <ClipboardList className="size-4" /> },
];

function HealthPage() {
  return (
    <AppShell
      title="Health & Wellbeing"
      subtitle="Whole-Person Care. Spirit, Soul & Body."
      side={
        <div className="space-y-4">
          <SideNav heading="Health Navigation" items={NAV} />
          <Panel title="Daily Wellness Score">
            <Donut value={84} label="Good" color="var(--accent-emerald)" size={130} />
            <ul className="mt-2 space-y-1 text-[11px]">
              {[["Physical", 82], ["Mental", 79], ["Spiritual", 88], ["Lifestyle", 86]].map(([l, v]) => (
                <li key={l as string} className="flex justify-between"><span className="text-muted-foreground">{l}</span><span>{v}</span></li>
              ))}
            </ul>
          </Panel>
        </div>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[[Activity, "Body", "text-emerald"], [Brain, "Mind", "text-violet"], [Cross, "Spirit", "text-cyan"], [Users, "Community", "text-gold"], [Sparkles, "Purpose", "text-rose"]].map(([I, t, c]) => {
              const Icon = I as any;
              return (
                <div key={t as string} className="text-center">
                  <div className={`mx-auto grid size-12 place-items-center rounded-full bg-white/5 ${c as string} ring-1 ring-current/40`}><Icon className="size-5" /></div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider">{t as string}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 panel bg-white/5 p-3 text-xs italic text-muted-foreground">
            "Dear friend, I hope all is well with you and that you are as healthy in body as you are strong in spirit." — 3 John 1:2
          </div>
        </Panel>
        <Panel title="Your Wellbeing Summary">
          <Donut value={84} label="Well" color="var(--accent-emerald)" size={140} />
          <div className="mt-3 space-y-1.5">
            <BarRow label="Physical Health" value={82} color="var(--accent-emerald)" />
            <BarRow label="Mental Wellbeing" value={79} color="var(--accent-violet)" />
            <BarRow label="Spiritual Health" value={88} color="var(--accent-cyan)" />
            <BarRow label="Community Connection" value={83} color="var(--accent-gold)" />
            <BarRow label="Lifestyle & Habits" value={86} color="var(--accent-rose)" />
          </div>
        </Panel>
      </div>

      <Panel title="Your Health at a Glance">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            [Activity, "Activity", "7,342", "Steps · Goal 10K", "text-emerald"],
            [Moon, "Sleep", "7h 24m", "Sleep Time · Goal 8h", "text-violet"],
            [Heart, "Heart Rate", "72 bpm", "Resting", "text-rose"],
            [Zap, "Stress", "36", "Low", "text-gold"],
            [Salad, "Nutrition", "725 / 2,100", "Calories", "text-emerald"],
            [Droplet, "Hydration", "2.0 L", "Goal 2.5 L", "text-cyan"],
          ].map(([I, l, v, s, c]) => {
            const Icon = I as any;
            return (
              <div key={l as string} className="panel p-3">
                <div className={`flex items-center gap-1.5 text-[10px] uppercase tracking-widest ${c as string}`}><Icon className="size-3" /> {l as string}</div>
                <div className="mt-1 font-display text-xl">{v as string}</div>
                <div className="text-[10px] text-muted-foreground">{s as string}</div>
              </div>
            );
          })}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Health Recommendations">
          <ul className="space-y-2 text-xs">
            {[
              ["Increase your daily water intake", "Aim for 2.5L to improve energy levels"],
              ["Great job! Completed activity goal 4 days this week", ""],
              ["Consider 5 minutes of breathing exercise", "To reduce stress"],
              ["Your next health check-up is in 15 days", ""],
            ].map(([t, s]) => (
              <li key={t} className="panel p-2"><div className="font-semibold">{t}</div>{s && <div className="text-[10px] text-muted-foreground">{s}</div>}</li>
            ))}
          </ul>
        </Panel>
        <Panel title="Care Team">
          <ul className="space-y-2 text-xs">
            {[["Dr. Mercy Johnson", "Primary Care Physician"], ["Dr. Samuel Okoro", "Mental Health Specialist"], ["Pastor Grace Williams", "Spiritual Care Advisor"], ["Coach Daniel Lee", "Nutrition & Wellness Coach"]].map(([n, r]) => (
              <li key={n} className="panel flex items-center gap-2 p-2">
                <div className="size-8 rounded-full bg-gradient-to-br from-cyan/40 to-violet/40" />
                <div><div className="font-semibold">{n}</div><div className="text-[10px] text-muted-foreground">{r}</div></div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Health Journey">
          <ul className="space-y-2 text-xs">
            {[["May 20", "Completed 30 min workout"], ["May 19", "Slept 7h 45m — good quality"], ["May 18", "Completed devotion & prayer"], ["May 17", "Healthy meal logged"]].map(([d, t]) => (
              <li key={d + t} className="flex justify-between border-b border-panel-border/60 pb-1"><span>{t}</span><span className="text-muted-foreground">{d}</span></li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Whole-Person Health Framework">
        <Pipeline
          steps={[
            { label: "Physical", sub: "Move · Rest · Nutrition", color: "var(--accent-emerald)", icon: <Activity className="size-4" /> },
            { label: "Mental", sub: "Mindset · Emotions · Resilience", color: "var(--accent-violet)", icon: <Brain className="size-4" /> },
            { label: "Spiritual", sub: "Faith · Purpose · Connection", color: "var(--accent-cyan)", icon: <Cross className="size-4" /> },
            { label: "Social", sub: "Relationships · Community", color: "var(--accent-gold)", icon: <Users className="size-4" /> },
            { label: "Environment", sub: "Healthy Spaces · Creation Care", color: "var(--accent-emerald)", icon: <Sparkles className="size-4" /> },
            { label: "Purpose", sub: "Calling · Impact · Legacy", color: "var(--accent-rose)", icon: <Heart className="size-4" /> },
          ]}
        />
      </Panel>
    </AppShell>
  );
}
