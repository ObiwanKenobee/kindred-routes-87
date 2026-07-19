import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel, Stat } from "@/components/aeon/Panel";
import { GospelWheel, Pipeline, GlobeMap, LayerCard } from "@/components/aeon/Widgets";
import {
  BookOpen, Users, GraduationCap, Lightbulb, Heart, Leaf, Globe2,
  Database, Sparkles, ShieldCheck, Cpu, Building2, Handshake, Store, Wallet,
  Scale, FileText, ChevronRight, HandHeart, Award, Star, TreePine, UserRound,
  Layers, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Overview — AEON GENESIS OS" }] }),
  component: OverviewPage,
});

const CORE = [
  { label: "Gospel Core", icon: <BookOpen className="size-4" /> },
  { label: "People & Discipleship", icon: <Users className="size-4" /> },
  { label: "Education & Learning", icon: <GraduationCap className="size-4" /> },
  { label: "Innovation & Entrepreneurship", icon: <Lightbulb className="size-4" /> },
  { label: "Health & Wellbeing", icon: <Heart className="size-4" /> },
  { label: "Stewardship & Creation", icon: <Leaf className="size-4" /> },
  { label: "Global Impact Projects", icon: <Globe2 className="size-4" /> },
];

const LAYERS = [
  { label: "Data & Intelligence", icon: <Database className="size-4" /> },
  { label: "AI & Automation", icon: <Sparkles className="size-4" /> },
  { label: "Infrastructure", icon: <Cpu className="size-4" /> },
  { label: "Security & Trust", icon: <ShieldCheck className="size-4" /> },
];

const ECO = [
  { label: "Community Network", icon: <Users className="size-4" /> },
  { label: "Partners & Organizations", icon: <Handshake className="size-4" /> },
  { label: "Marketplace", icon: <Store className="size-4" /> },
  { label: "Funding & Resources", icon: <Wallet className="size-4" /> },
];

const GOV = [
  { label: "Kingdom Governance", icon: <Scale className="size-4" /> },
  { label: "Ethics & Accountability", icon: <ShieldCheck className="size-4" /> },
  { label: "Transparency Ledger", icon: <FileText className="size-4" /> },
];

const VALUES = [
  { name: "Love", desc: "We serve with compassion and humility", color: "text-rose", icon: <Heart className="size-4" /> },
  { name: "Integrity", desc: "We do what is right in every situation", color: "text-blue", icon: <ShieldCheck className="size-4" /> },
  { name: "Excellence", desc: "We pursue the highest standards", color: "text-violet", icon: <Award className="size-4" /> },
  { name: "Unity", desc: "We build together in diversity", color: "text-cyan", icon: <Users className="size-4" /> },
  { name: "Generosity", desc: "We give freely and abundantly", color: "text-gold", icon: <HandHeart className="size-4" /> },
  { name: "Stewardship", desc: "We manage resources for future generations", color: "text-emerald", icon: <Leaf className="size-4" /> },
];

function OverviewPage() {
  return (
    <AppShell
      title="AEON GENESIS OS"
      subtitle="The Gospel Economy Operating System   ·   FAITH · INNOVATION · IMPACT · ETERNITY"
      side={
        <div className="space-y-4">
          <SideNav heading="Core Systems" items={CORE.map((c) => ({ ...c }))} />
          <SideNav heading="Platform Layers" items={LAYERS.map((c) => ({ ...c }))} />
          <SideNav heading="Ecosystem" items={ECO.map((c) => ({ ...c }))} />
          <SideNav heading="Governance" items={GOV.map((c) => ({ ...c }))} />
          <Panel title="System Status">
            <div className="flex items-center gap-2 text-sm">
              <span className="size-2 rounded-full bg-emerald shadow-[0_0_8px_var(--accent-emerald)]" />
              <span className="font-semibold text-emerald">OPERATIONAL</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">All Systems Nominal</div>
            <svg viewBox="0 0 200 40" className="mt-3 h-10 w-full">
              <polyline points="0,30 20,25 40,28 60,20 80,22 100,15 120,18 140,10 160,14 180,8 200,12" fill="none" stroke="var(--accent-emerald)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px var(--accent-emerald))" }} />
            </svg>
          </Panel>
        </div>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)_300px]">
        {/* Left column: purpose + values */}
        <div className="space-y-5">
          <Panel accent="cyan">
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan">Our Purpose</div>
            <h3 className="mt-2 font-display text-xl leading-tight">Transforming Humanity Through Kingdom Innovation</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              An integrated platform uniting faith, technology, and purpose to advance the Gospel and create lasting impact across every sphere of society.
            </p>
            <button className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan hover:bg-cyan/20">
              Explore Vision <ChevronRight className="size-3" />
            </button>
          </Panel>
          <Panel title="Kingdom Values Engine">
            <ul className="space-y-3">
              {VALUES.map((v) => (
                <li key={v.name} className="flex gap-3">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full bg-white/5 ${v.color}`}>{v.icon}</span>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold uppercase tracking-wider ${v.color}`}>{v.name}</div>
                    <div className="text-[11px] leading-snug text-muted-foreground">{v.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* Center: wheel */}
        <div>
          <Panel className="min-h-[560px]">
            <GospelWheel
              centerTitle="GOSPEL CORE"
              centerSubtitle="GRACE · TRUTH · LOVE · PURPOSE"
              segments={[
                { label: "Education & Learning", color: "var(--accent-violet)", icon: <GraduationCap className="size-4" /> },
                { label: "Health & Wellbeing", color: "var(--accent-rose)", icon: <Heart className="size-4" /> },
                { label: "Global Impact", color: "var(--accent-gold)", icon: <Globe2 className="size-4" /> },
                { label: "Community & Fellowship", color: "var(--accent-cyan)", icon: <Users className="size-4" /> },
                { label: "Stewardship & Creation", color: "var(--accent-emerald)", icon: <Leaf className="size-4" /> },
                { label: "Innovation & Entrepreneurship", color: "var(--accent-blue)", icon: <Lightbulb className="size-4" /> },
              ]}
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Worship ↑</span><span>Mission ↓</span><span>Prayer ←</span><span>Discipleship →</span>
            </div>
          </Panel>
        </div>

        {/* Right */}
        <div className="space-y-5">
          <Panel title="Platform Architecture">
            <div className="space-y-2">
              <LayerCard label="Experience Layer" sub="Web · Mobile · XR · Voice · AI Assistant" tone="cyan" active />
              <LayerCard label="Application Layer" sub="Apps · Services · Workflows · Automations" tone="violet" />
              <LayerCard label="Intelligence Layer" sub="AI/ML · Analytics · Insights · Predictions" tone="blue" />
              <LayerCard label="Data Layer" sub="Unified Data · Knowledge Graph · APIs" tone="emerald" />
              <LayerCard label="Infrastructure Layer" sub="Cloud · Edge · Security · Scalability" tone="gold" />
            </div>
          </Panel>

          <Panel title="Global Impact 2050">
            <ul className="grid grid-cols-2 gap-3">
              {[
                { v: "2.0B+", l: "Lives Impacted", i: <Users className="size-4" />, t: "text-cyan" },
                { v: "150M+", l: "Active Disciples", i: <UserRound className="size-4" />, t: "text-violet" },
                { v: "50M+", l: "Social Enterprises", i: <Building2 className="size-4" />, t: "text-blue" },
                { v: "$1.2T+", l: "Economic Impact", i: <Wallet className="size-4" />, t: "text-gold" },
                { v: "100M+", l: "Children Educated", i: <GraduationCap className="size-4" />, t: "text-emerald" },
                { v: "1B+", l: "Trees Planted", i: <TreePine className="size-4" />, t: "text-emerald" },
                { v: "500M+", l: "People Served", i: <HandHeart className="size-4" />, t: "text-rose" },
                { v: "200+", l: "Countries Reached", i: <Globe2 className="size-4" />, t: "text-cyan" },
              ].map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-md bg-white/5 ${s.t}`}>{s.i}</span>
                  <div>
                    <div className={`font-display text-lg ${s.t}`}>{s.v}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      {/* Kingdom Impact Pipeline */}
      <Panel title="Kingdom Impact Pipeline">
        <Pipeline
          steps={[
            { label: "Encounter", sub: "Hear the Gospel", color: "var(--accent-cyan)", icon: <Users className="size-4" /> },
            { label: "Believe", sub: "Accept & Grow", color: "var(--accent-violet)", icon: <BookOpen className="size-4" /> },
            { label: "Belong", sub: "Community & Care", color: "var(--accent-gold)", icon: <HandHeart className="size-4" /> },
            { label: "Become", sub: "Equip & Develop", color: "var(--accent-emerald)", icon: <Sparkles className="size-4" /> },
            { label: "Build", sub: "Create & Innovate", color: "var(--accent-blue)", icon: <Layers className="size-4" /> },
            { label: "Bless", sub: "Impact the World", color: "var(--accent-rose)", icon: <Star className="size-4" /> },
          ]}
        />
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="Global Reach">
          <GlobeMap caption="Every Nation. Every People." />
          <button className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan hover:bg-cyan/20">
            View Impact Map <ArrowRight className="size-3" />
          </button>
        </Panel>
        <Panel title="Live Activity Feed">
          <ul className="space-y-3 text-sm">
            {[
              ["New Church Plant in Kenya", "2 min ago"],
              ["500 Children Enrolled in Digital Academy", "5 min ago"],
              ["Clean Water Project Funded in Bangladesh", "12 min ago"],
              ["AI Discipleship Session Completed", "15 min ago"],
              ["Solar Village Powered in Rwanda", "22 min ago"],
            ].map(([t, w]) => (
              <li key={t} className="flex items-start gap-3 border-b border-panel-border/60 pb-2 last:border-0">
                <span className="mt-1 size-2 rounded-full bg-cyan shadow-[0_0_8px_var(--accent-cyan)]" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">{t}</div>
                  <div className="text-[10px] text-muted-foreground">{w}</div>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-cyan">View All Activity →</button>
        </Panel>
      </div>

      <Panel title="Cross-Cutting Foundations">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {[
            ["Prayer & Worship", "Spiritual Foundation", "text-violet"],
            ["Biblical Truth", "Unchanging Foundation", "text-blue"],
            ["Holy Spirit", "Power & Guidance", "text-cyan"],
            ["Technology", "Innovation Enabler", "text-blue"],
            ["Data & Insights", "Evidence Based", "text-emerald"],
            ["Partnerships", "Stronger Together", "text-gold"],
            ["Funding", "Sustainable Growth", "text-rose"],
            ["Governance", "Accountable & Transparent", "text-violet"],
          ].map(([t, s, c]) => (
            <div key={t} className="panel px-3 py-2.5 text-center">
              <div className={`text-[11px] font-bold uppercase tracking-wider ${c}`}>{t}</div>
              <div className="text-[10px] text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Aeon Intelligence Engine (AI Brain)" accent="cyan">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Natural Language", "Understanding & Generation"],
            ["Predictive Analytics", "Forecast & Recommend"],
            ["Personalization", "Adaptive Experiences"],
            ["Automation", "Smart Workflows"],
            ["Knowledge Graph", "Contextual Intelligence"],
            ["Ethics & Safety", "Guardrails & Alignment"],
          ].map(([t, s]) => (
            <div key={t} className="panel flex items-start gap-2 px-3 py-2.5">
              <Sparkles className="size-4 shrink-0 text-cyan" />
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-foreground">{t}</div>
                <div className="text-[10px] text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
