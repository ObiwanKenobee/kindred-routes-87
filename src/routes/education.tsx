import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut, BarRow } from "@/components/aeon/Widgets";
import {
  BookOpen, GraduationCap, Award, Sparkles, Users, Globe2, Heart,
  Briefcase, Cpu, LayoutDashboard, Search,
} from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [{ title: "Education & Learning — AEON GENESIS OS" }] }),
  component: EducationPage,
});

const NAV = [
  { label: "Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "My Learning", icon: <BookOpen className="size-4" /> },
  { label: "Courses", icon: <GraduationCap className="size-4" /> },
  { label: "Learning Paths", icon: <Sparkles className="size-4" /> },
  { label: "Certificates", icon: <Award className="size-4" /> },
  { label: "Live Classes", icon: <Users className="size-4" /> },
  { label: "Library", icon: <BookOpen className="size-4" /> },
  { label: "Study Groups", icon: <Users className="size-4" /> },
  { label: "Mentorship", icon: <Heart className="size-4" /> },
  { label: "Kids Zone", icon: <Sparkles className="size-4" /> },
  { label: "Educators Hub", icon: <Briefcase className="size-4" /> },
];

const DOMAINS = [
  "Biblical Studies", "Theology & Faith", "Leadership & Ministry", "Personal Growth",
  "Family & Relationships", "Science & Creation", "Business & Stewardship",
  "Technology & Innovation", "Arts & Worship", "Mission & Impact", "Languages",
];

const CATEGORIES = [
  { name: "Faith Foundations", color: "text-cyan" },
  { name: "Bible Discovery", color: "text-blue" },
  { name: "Leadership Excellence", color: "text-violet" },
  { name: "Kingdom Living", color: "text-gold" },
  { name: "Life Skills", color: "text-emerald" },
  { name: "Career & Business", color: "text-rose" },
  { name: "STEAM & Innovation", color: "text-blue" },
  { name: "Global Missions", color: "text-cyan" },
];

const RECOMMENDED = [
  ["New Believer Foundations", "Foundations · 12 Lessons · Beginner", "95%", "text-cyan"],
  ["Survey of the New Testament", "Biblical Studies · 20 Lessons · Intermediate", "60%", "text-blue"],
  ["Effective Leadership for Kingdom Impact", "Leadership · 18 Lessons · Intermediate", "40%", "text-violet"],
  ["Overcoming Fear with Faith", "Personal Growth · 10 Lessons · Beginner", "80%", "text-gold"],
  ["Living on Mission Every Day", "Mission & Impact · 14 Lessons · All Levels", "30%", "text-rose"],
];

function EducationPage() {
  return (
    <AppShell
      title="EDUCATION & LEARNING"
      subtitle="Equipping Minds. Shaping Hearts. Transforming Nations."
      side={
        <div className="space-y-4">
          <SideNav heading="Learning Navigation" items={NAV} />
          <Panel title="Explore by Domain">
            <ul className="space-y-1 text-xs text-muted-foreground">
              {DOMAINS.map((d) => (
                <li key={d} className="cursor-pointer rounded px-2 py-1 hover:bg-white/5 hover:text-foreground">{d}</li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Daily Verse</div>
            <p className="mt-2 text-xs italic leading-relaxed">"Train up a child in the way he should go; even when he is old he will not depart from it."</p>
            <div className="mt-1 text-[11px] text-cyan">Proverbs 22:6</div>
          </Panel>
        </div>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="What do you want to learn today?" className="w-full rounded-lg border border-panel-border bg-white/5 py-3 pl-9 pr-4 text-sm outline-none focus:border-cyan/50" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center">
                <div className={`grid size-10 place-items-center rounded-full bg-white/5 ${c.color} ring-1 ring-current/40`}><Sparkles className="size-4" /></div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{c.name}</div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="My Learning Streak">
          <div className="flex items-center gap-4">
            <Donut value={82} label="23 days" color="var(--accent-gold)" size={140} />
            <div className="text-xs text-muted-foreground">
              🔥 Keep going!<br />7 days to unlock your next badge.
            </div>
          </div>
        </Panel>
      </div>

      <Panel title="Recommended for You">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {RECOMMENDED.map(([t, m, p, c]) => (
            <div key={t} className="panel p-3">
              <div className="mb-2 aspect-video rounded-md bg-gradient-to-br from-violet/40 to-cyan/30" />
              <div className={`text-[10px] font-bold uppercase tracking-wider ${c}`}>{c.replace('text-', '').toUpperCase()}</div>
              <div className="mt-1 text-sm font-semibold leading-tight">{t}</div>
              <div className="mt-1 text-[10px] text-muted-foreground">{m}</div>
              <div className="mt-2 text-[11px] text-emerald">{p} Complete</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Your Learning Path">
          <div className="text-sm font-semibold">Discipleship Pathway</div>
          <p className="mt-1 text-xs text-muted-foreground">A structured journey to grow in Christ and make disciples.</p>
          <div className="mt-3 flex items-center gap-1">
            {["Saved", "Foundations", "Growing", "Serving", "Leading", "Multiplying"].map((s, i) => (
              <div key={s} className="flex-1 text-center">
                <div className={`mx-auto size-6 rounded-full ${i < 3 ? "bg-emerald" : "bg-white/10"}`} />
                <div className="mt-1 text-[9px] text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs">Current Stage: <span className="text-emerald">Growing in Faith · 65%</span></div>
        </Panel>

        <Panel title="Learning Impact">
          <div className="flex items-center gap-4">
            <Donut value={74} label="Lives Impacted" color="var(--accent-rose)" size={140} />
            <ul className="space-y-1 text-[11px]">
              {[["Courses Completed", "2.4M", "+18.5%"], ["New Learners", "1.2M", "+22.1%"], ["Certificates Earned", "892K", "+15.7%"], ["Groups Active", "156K", "+19.3%"]].map(([l, v, d]) => (
                <li key={l}><div className="text-muted-foreground">{l}</div><div className="flex items-baseline gap-2"><span className="font-display text-sm">{v}</span><span className="text-emerald text-[10px]">{d}</span></div></li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel title="Study Groups">
          <ul className="space-y-2 text-xs">
            {[["Kingdom Leaders Global", "32 · Active"], ["Youth Discipleship Hub", "28 · Active"], ["Women of Purpose", "21 · Active"], ["Bible Scholars", "45 · Active"]].map(([n, m]) => (
              <li key={n} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5 last:border-0">
                <span>{n}</span><span className="text-emerald text-[10px]">{m}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Powered Learning Experience">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 text-xs">
          {[["AI-Powered Recommendations", "Personalized for you"], ["Interactive Learning", "Engaging & immersive"], ["Multi-Language Support", "100+ languages"], ["Offline Access", "Learn anywhere"], ["Gamification", "Stay motivated"], ["Mentorship Connect", "Learn from leaders"]].map(([t, s]) => (
            <div key={t} className="panel p-3">
              <Cpu className="mb-1 size-4 text-cyan" />
              <div className="text-[11px] font-semibold">{t}</div>
              <div className="text-[10px] text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
