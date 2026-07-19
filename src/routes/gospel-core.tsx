import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { GospelWheel, Pipeline, Donut, BarRow, GlobeMap, LayerCard } from "@/components/aeon/Widgets";
import {
  UserRound, Cross, BookOpen, ShieldCheck, Heart, Sprout, ArrowUpRight, Music,
  Crown, Sparkles, Users, MessageCircle, Church,
} from "lucide-react";

export const Route = createFileRoute("/gospel-core")({
  head: () => ({ meta: [{ title: "Gospel Core — AEON GENESIS OS" }] }),
  component: GospelCorePage,
});

const OVERVIEW = [
  { label: "Identity & Purpose", icon: <UserRound className="size-4" />, active: true },
  { label: "Grace & Salvation", icon: <Cross className="size-4" /> },
  { label: "Scripture & Truth", icon: <BookOpen className="size-4" /> },
  { label: "Faith & Belief", icon: <ShieldCheck className="size-4" /> },
  { label: "Love & Relationship", icon: <Heart className="size-4" /> },
  { label: "Discipleship & Growth", icon: <Sprout className="size-4" /> },
  { label: "Mission & Purpose", icon: <ArrowUpRight className="size-4" /> },
  { label: "Worship & Reverence", icon: <Music className="size-4" /> },
  { label: "Kingdom Impact", icon: <Crown className="size-4" /> },
];

function GospelCorePage() {
  return (
    <AppShell
      title="GOSPEL CORE"
      subtitle="The Eternal Foundation. The Unchanging Source. The Living Power."
      side={
        <div className="space-y-4">
          <SideNav heading="Gospel Core Overview" items={OVERVIEW} />
          <Panel title="Core Health Monitor">
            <div className="flex items-center gap-4">
              <Donut value={98} label="Gospel Integrity" color="var(--accent-emerald)" size={110} />
              <ul className="space-y-1.5 text-[11px]">
                {["Biblical Fidelity", "Doctrinal Integrity", "Grace Alignment", "Love Demonstration", "Mission Effectiveness", "Kingdom Impact"].map((l) => (
                  <li key={l} className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald" /> {l}
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
          <Panel title="Core Metrics (Live)">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["People Reached", "2.8B", "+12.5%"],
                ["Disciple Makers", "24.7M", "+9.1%"],
                ["Lives Transformed", "156M", "+18.3%"],
                ["Communities", "89K", "+14.7%"],
              ].map(([l, v, d]) => (
                <div key={l}>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  <div className="font-display text-lg">{v}</div>
                  <div className="text-[10px] text-emerald">{d}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel className="min-h-[560px]">
          <div className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Eternal Truth</div>
          <GospelWheel
            centerTitle="JESUS CHRIST"
            centerSubtitle="Yesterday, Today and Forever · Hebrews 13:8"
            segments={[
              { label: "Identity", sublabel: "Ephesians 1:4-5", color: "var(--accent-cyan)", icon: <UserRound className="size-4" /> },
              { label: "Grace & Salvation", sublabel: "Ephesians 2:8-9", color: "var(--accent-violet)", icon: <Cross className="size-4" /> },
              { label: "Scripture & Truth", sublabel: "2 Timothy 3:16", color: "var(--accent-blue)", icon: <BookOpen className="size-4" /> },
              { label: "Faith & Belief", sublabel: "Hebrews 11:1", color: "var(--accent-emerald)", icon: <ShieldCheck className="size-4" /> },
              { label: "Discipleship", sublabel: "Matthew 28:19-20", color: "var(--accent-emerald)", icon: <Sprout className="size-4" /> },
              { label: "Mission", sublabel: "Matthew 5:14-16", color: "var(--accent-gold)", icon: <ArrowUpRight className="size-4" /> },
              { label: "Love", sublabel: "John 13:34-35", color: "var(--accent-rose)", icon: <Heart className="size-4" /> },
              { label: "Worship", sublabel: "John 4:24", color: "var(--accent-violet)", icon: <Music className="size-4" /> },
            ]}
          />
        </Panel>

        <div className="space-y-5">
          <Panel title="Core System Architecture">
            <div className="space-y-2">
              <LayerCard label="Foundation Layer" sub="Eternal Truth · Unchanging" tone="cyan" active />
              <LayerCard label="Revelation Layer" sub="Scripture · Prophecy · Wisdom" tone="violet" />
              <LayerCard label="Relationship Layer" sub="Communion · Fellowship · Love" tone="emerald" />
              <LayerCard label="Transformation Layer" sub="Renewal · Discipleship · Growth" tone="blue" />
              <LayerCard label="Mission Layer" sub="Purpose · Calling · Impact" tone="gold" />
              <LayerCard label="Kingdom Layer" sub="Authority · Power · Glory" tone="rose" />
            </div>
          </Panel>
          <Panel title="Biblical Alignment">
            <div className="flex items-center gap-4">
              <Donut value={97} label="Aligned" color="var(--accent-cyan)" size={120} />
              <div className="flex-1 space-y-2">
                <BarRow label="Scripture Alignment" value={98} color="var(--accent-emerald)" />
                <BarRow label="Gospel Accuracy" value={97} color="var(--accent-cyan)" />
                <BarRow label="Doctrinal Soundness" value={96} color="var(--accent-blue)" />
                <BarRow label="Kingdom Principles" value={97} color="var(--accent-violet)" />
                <BarRow label="Love Expression" value={98} color="var(--accent-rose)" />
              </div>
            </div>
          </Panel>
        </div>
      </div>

      <Panel title="Global Gospel Impact">
        <GlobeMap />
        <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["2.8B", "People Reached"],
            ["156M", "Lives Transformed"],
            ["89K", "Communities"],
            ["195", "Countries"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-2xl text-cyan">{v}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Core Flow Architecture — Love Connects">
        <Pipeline
          steps={[
            { label: "Encounter", sub: "God's Presence", color: "var(--accent-cyan)", icon: <Sparkles className="size-4" /> },
            { label: "Receive", sub: "His Grace", color: "var(--accent-violet)", icon: <Cross className="size-4" /> },
            { label: "Believe", sub: "His Truth", color: "var(--accent-blue)", icon: <BookOpen className="size-4" /> },
            { label: "Become", sub: "Like Christ", color: "var(--accent-emerald)", icon: <Sprout className="size-4" /> },
            { label: "Belong", sub: "To His Family", color: "var(--accent-gold)", icon: <Users className="size-4" /> },
            { label: "Build", sub: "His Kingdom", color: "var(--accent-rose)", icon: <Crown className="size-4" /> },
            { label: "Bless", sub: "The World", color: "var(--accent-rose)", icon: <Heart className="size-4" /> },
          ]}
        />
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Grace</span>·<span>Faith</span>·<span>Transformation</span>·<span>Mission</span>·<span>Multiplication</span>
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Real-Time Activity Stream">
          <ul className="space-y-2.5 text-xs">
            {[
              ["New believer in Brazil", "8 sec ago", "text-emerald"],
              ["Discipleship group formed in Kenya", "12 sec ago", "text-cyan"],
              ["Community project launched in India", "18 sec ago", "text-violet"],
              ["Worship event in Philippines", "22 sec ago", "text-gold"],
              ["Person rededicated life to Christ in USA", "30 sec ago", "text-rose"],
            ].map(([t, w, c]) => (
              <li key={t} className="flex items-center justify-between border-b border-panel-border/60 pb-1.5 last:border-0">
                <span className="flex items-center gap-2">
                  <span className={`size-1.5 rounded-full bg-current ${c}`} /> {t}
                </span>
                <span className="text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="AI Discernment Engine">
          <div className="grid grid-cols-2 gap-3 text-xs">
            {[
              ["Analyzing spiritual trends", "Across 195 nations"],
              ["Recommending actions", "For maximum Kingdom impact"],
              ["Detecting needs", "Communities & individuals"],
              ["Empowering leaders", "With wisdom & resources"],
            ].map(([t, s]) => (
              <div key={t} className="panel px-3 py-2">
                <div className="text-[11px] font-semibold text-foreground">{t}</div>
                <div className="text-[10px] text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid place-items-center">
            <div className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-cyan/40 to-violet/40 font-display text-lg ring-1 ring-cyan/40">AI</div>
          </div>
        </Panel>
        <Panel title="Core Guardians">
          <ul className="grid grid-cols-2 gap-3 text-xs">
            {[
              ["Holy Spirit", "Divine Guide", <Sparkles key="1" className="size-4 text-cyan" />],
              ["Prayer Network", "Global Intercession", <MessageCircle key="2" className="size-4 text-violet" />],
              ["Jesus Christ", "The Head", <Crown key="3" className="size-4 text-gold" />],
              ["Biblical Truth", "Unchanging Word", <BookOpen key="4" className="size-4 text-blue" />],
            ].map(([t, s, i], idx) => (
              <li key={idx} className="panel flex items-center gap-2 px-3 py-2">
                {i as any}
                <div>
                  <div className="text-[11px] font-semibold">{t as string}</div>
                  <div className="text-[10px] text-muted-foreground">{s as string}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="panel mt-3 flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground">
            <Church className="size-4 text-cyan" />
            "I will build My church, and the gates of hell shall not prevail against it." — Matthew 16:18
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
