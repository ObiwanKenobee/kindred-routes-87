import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/aeon/Panel";
import { Pipeline, Donut, BarRow, GlobeMap } from "@/components/aeon/Widgets";
import {
  Users, UserRound, Sprout, Sparkles, Crown, BookOpen, Calendar,
  Heart, Bell,
} from "lucide-react";

export const Route = createFileRoute("/people/")({
  component: PeopleIndex,
});

function PeopleIndex() {
  return (
    <>
      {/* Top KPI strip */}
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["2.8B", "People Reached", "+12.4%", "text-cyan", <Users key="1" className="size-4" />],
            ["156M", "Active Disciples", "+18.7%", "text-violet", <UserRound key="2" className="size-4" />],
            ["24.7M", "New This Month", "+21.3%", "text-emerald", <Sparkles key="3" className="size-4" />],
            ["89K", "Communities", "+15.2%", "text-gold", <Users key="4" className="size-4" />],
            ["24.7K", "Mentors", "+17.8%", "text-rose", <Heart key="5" className="size-4" />],
            ["68", "Nations", "+8.6%", "text-blue", <Crown key="6" className="size-4" />],
          ].map(([v, l, d, c, i]) => (
            <div key={l as string} className="flex items-center gap-3">
              <span className={`grid size-10 place-items-center rounded-full bg-white/5 ${c as string}`}>{i as any}</span>
              <div>
                <div className="font-display text-2xl text-foreground">{v as string}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l as string}</div>
                <div className={`text-[10px] ${c as string}`}>{d as string}</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px]">
        <Panel title="Discipleship Journey Map">
          <Pipeline
            steps={[
              { label: "1. Encounter", sub: "Hear the Gospel", color: "var(--accent-cyan)", icon: <UserRound className="size-4" /> },
              { label: "2. Believe", sub: "Trust in Jesus", color: "var(--accent-violet)", icon: <Sparkles className="size-4" /> },
              { label: "3. Follow", sub: "Start the Journey", color: "var(--accent-emerald)", icon: <Sprout className="size-4" /> },
              { label: "4. Grow", sub: "Develop in Faith", color: "var(--accent-gold)", icon: <BookOpen className="size-4" /> },
              { label: "5. Equip", sub: "Discover Purpose", color: "var(--accent-blue)", icon: <Bell className="size-4" /> },
              { label: "6. Multiply", sub: "Make Disciples", color: "var(--accent-rose)", icon: <Users className="size-4" /> },
            ]}
          />
          <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
            {[
              ["812M", "Encounter", "+10.2%"],
              ["432M", "Believe", "+12.8%"],
              ["256M", "Follow", "+14.1%"],
              ["126M", "Grow", "+16.5%"],
              ["68M", "Equip", "+18.2%"],
              ["24M", "Multiply", "+20.7%"],
            ].map(([v, l, d]) => (
              <div key={l} className="text-center">
                <div className="font-display text-lg">{v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                <div className="text-[10px] text-emerald">{d}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Discipleship Health Score">
          <div className="flex items-center gap-4">
            <Donut value={87} label="Healthy" color="var(--accent-emerald)" size={140} />
            <div className="flex-1 space-y-2">
              <BarRow label="Spiritual Formation" value={91} color="var(--accent-emerald)" />
              <BarRow label="Community Engagement" value={85} color="var(--accent-cyan)" />
              <BarRow label="Scripture Engagement" value={88} color="var(--accent-blue)" />
              <BarRow label="Prayer Life" value={82} color="var(--accent-violet)" />
              <BarRow label="Mission Involvement" value={90} color="var(--accent-gold)" />
              <BarRow label="Kingdom Impact" value={87} color="var(--accent-rose)" />
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-emerald">+6.3% from last month</div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="My Groups & Communities">
          <div className="flex items-center gap-4">
            <Donut value={75} label="Groups" color="var(--accent-violet)" size={110} />
            <ul className="space-y-1 text-xs">
              {[["Active", 8, "text-emerald"], ["New", 2, "text-cyan"], ["Paused", 1, "text-gold"], ["Completed", 1, "text-violet"]].map(([l, v, c]) => (
                <li key={l as string} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-muted-foreground"><span className={`size-2 rounded-full bg-current ${c as string}`} />{l as string}</span>
                  <span className="font-semibold">{v as number}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-cyan">View All Groups →</button>
        </Panel>

        <Panel title="Upcoming Events">
          <ul className="space-y-2.5 text-xs">
            {[
              ["Global Prayer Gathering", "May 25 · 7:00 PM UTC", "LIVE"],
              ["Discipleship Training Bootcamp", "May 28 · 10:00 AM UTC"],
              ["Youth Leadership Summit", "May 31 · 2:00 PM UTC"],
              ["Mission Outreach Weekend", "Jun 3 · 9:00 AM UTC"],
            ].map(([t, w, b]) => (
              <li key={t} className="flex items-start gap-2 border-b border-panel-border/60 pb-2 last:border-0">
                <Calendar className="mt-0.5 size-4 text-cyan" />
                <div className="flex-1">
                  <div className="text-xs font-medium">{t}</div>
                  <div className="text-[10px] text-muted-foreground">{w}</div>
                </div>
                {b && <span className="rounded-full bg-rose/20 px-2 py-0.5 text-[9px] font-bold uppercase text-rose">{b}</span>}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent Testimonies">
          <ul className="space-y-3 text-xs">
            {[
              ["Maria S.", "Brazil", "I was lost and broken, but Jesus changed my life completely."],
              ["Daniel K.", "Kenya", "Through discipleship, I discovered my purpose and started a ministry."],
              ["Aisha T.", "Philippines", "God is moving on our campus! 12 of my friends accepted Jesus this month."],
            ].map(([n, p, q]) => (
              <li key={n} className="border-b border-panel-border/60 pb-2 last:border-0">
                <div className="italic text-muted-foreground">"{q}"</div>
                <div className="mt-1 text-[10px] font-semibold text-cyan">— {n} · {p}</div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="Discipleship Pathways">
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { name: "Foundations", sub: "New Believer Track", lessons: 12, cta: "Start", color: "text-cyan" },
              { name: "Growth", sub: "Spiritual Growth Track", lessons: 24, cta: "Continue", color: "text-emerald" },
              { name: "Leadership", sub: "Leader Development", lessons: 36, cta: "Start", color: "text-violet" },
              { name: "Multiplication", sub: "Disciple Maker Track", lessons: 24, cta: "Start", color: "text-gold" },
            ].map((p) => (
              <div key={p.name} className="panel p-4">
                <div className={`text-[11px] font-bold uppercase tracking-wider ${p.color}`}>{p.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.sub}</div>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">{p.lessons} Lessons</div>
                <button className="mt-3 w-full rounded-md border border-cyan/40 bg-cyan/10 px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan">{p.cta}</button>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="People Insights">
          <GlobeMap />
          <ul className="mt-3 space-y-1.5 text-xs">
            {[["Africa", "+28.4%"], ["South Asia", "+23.7%"], ["Latin America", "+19.8%"], ["Southeast Asia", "+18.9%"], ["Europe", "+12.3%"]].map(([r, d]) => (
              <li key={r} className="flex justify-between border-b border-panel-border/60 pb-1 last:border-0">
                <span className="text-muted-foreground">{r}</span>
                <span className="text-emerald">{d}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Discipleship Impact (YTD)">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["4.2M", "Salvations", "+22.1%"],
            ["1.8M", "Baptisms", "+19.3%"],
            ["247K", "Trained Leaders", "+24.7%"],
            ["8.7K", "New Churches", "+18.8%"],
          ].map(([v, l, d]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl text-cyan">{v}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="mt-1 text-[11px] text-emerald">{d}</div>
              <svg viewBox="0 0 100 20" className="mx-auto mt-1 h-4 w-24">
                <polyline points="0,15 15,12 30,14 45,8 60,10 75,4 90,6 100,3" fill="none" stroke="var(--accent-emerald)" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
