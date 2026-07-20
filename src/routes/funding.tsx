import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { Donut } from "@/components/aeon/Widgets";
import {
  LayoutDashboard, Wallet, Award, Users, Package, BookOpen,
  Briefcase, FileText, Heart, Target, ShoppingCart,
} from "lucide-react";

export const Route = createFileRoute("/funding")({
  head: () => ({ meta: [{ title: "Funding & Resources — AEON GENESIS OS" }] }),
  component: FundingPage,
});

const NAV = [
  { label: "Overview Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Funding Opportunities", icon: <Wallet className="size-4" /> },
  { label: "Grants Directory", icon: <Award className="size-4" /> },
  { label: "Investors & Donors", icon: <Users className="size-4" /> },
  { label: "Resource Marketplace", icon: <ShoppingCart className="size-4" /> },
  { label: "Knowledge Hub", icon: <BookOpen className="size-4" /> },
  { label: "Capacity Building", icon: <Target className="size-4" /> },
  { label: "Tools & Templates", icon: <Package className="size-4" /> },
  { label: "Asset Library", icon: <Briefcase className="size-4" /> },
  { label: "Community Fund", icon: <Heart className="size-4" /> },
  { label: "Impact Portfolio", icon: <FileText className="size-4" /> },
];

function FundingPage() {
  return (
    <AppShell
      title="FUNDING & RESOURCES"
      subtitle="Empowering visionaries. Fueling impact. Building a better world."
      side={
        <div className="space-y-4">
          <SideNav heading="Funding Hub" items={NAV} />
          <Panel title="Resource Navigator">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Find the right resources to build, scale and sustain your impact.</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[10px]">
              {[["Discover", "cyan"], ["Connect", "violet"], ["Access", "gold"], ["Build", "emerald"]].map(([l, c]) => (
                <div key={l} className="panel p-2" style={{ color: `var(--accent-${c})` }}>{l}</div>
              ))}
            </div>
          </Panel>
        </div>
      }
    >
      <Panel>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["Total Funding", "$412.7M", "+24% Q", "text-emerald"],
            ["Active Opportunities", "328", "+18% Q", "text-cyan"],
            ["Grant Programs", "142", "+12% Q", "text-violet"],
            ["Active Investors", "186", "+15% Q", "text-gold"],
            ["Resources Available", "1,248", "+20% Q", "text-blue"],
            ["Communities Impacted", "24.7M", "+28% Q", "text-rose"],
          ].map(([v, l, d, c]) => (
            <div key={l}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className={`font-display text-2xl ${c}`}>{v}</div>
              <div className="text-[10px] text-emerald">{d}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Funding Breakdown">
          <div className="flex items-center gap-3">
            <Donut value={100} label="$412.7M" color="var(--accent-cyan)" size={150} />
            <ul className="space-y-1 text-[11px]">
              <li className="flex justify-between gap-3"><span className="text-emerald">● Grants</span><span>$156.3M (37.9%)</span></li>
              <li className="flex justify-between gap-3"><span className="text-violet">● Impact Invest</span><span>$128.6M (31.1%)</span></li>
              <li className="flex justify-between gap-3"><span className="text-gold">● Donations</span><span>$76.4M (18.5%)</span></li>
              <li className="flex justify-between gap-3"><span className="text-cyan">● Crowdfunding</span><span>$32.6M (7.9%)</span></li>
              <li className="flex justify-between gap-3"><span className="text-rose">● Other</span><span>$18.6M (4.6%)</span></li>
            </ul>
          </div>
          <div className="mt-2 text-[10px] text-emerald">↑ 24% vs last quarter</div>
        </Panel>
        <Panel title="Funding Trends (This Year)">
          <svg viewBox="0 0 300 140" className="h-36 w-full">
            {["#5cbdb9", "#a78bfa", "#facc15", "#34d399", "#f472b6"].map((c, i) => (
              <polyline key={i} fill="none" stroke={c} strokeWidth="1.5"
                points={Array.from({ length: 12 }).map((_, j) => `${j * 26 + 10},${100 - Math.sin(j / 2 + i) * 15 - i * 8 - j * 2}`).join(" ")}
                style={{ filter: `drop-shadow(0 0 3px ${c})` }} />
            ))}
          </svg>
          <div className="mt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="text-cyan">● Grants</span><span className="text-violet">● Investments</span><span className="text-gold">● Donations</span><span className="text-emerald">● Crowdfunding</span>
          </div>
        </Panel>
        <Panel title="Top Impact Areas">
          <ul className="space-y-2 text-xs">
            {[
              ["Climate Action", "$98.7M (23.9%)"],
              ["Health & Wellbeing", "$76.2M (18.5%)"],
              ["Education & Learning", "$64.3M (15.6%)"],
              ["Sustainable Energy", "$58.9M (14.3%)"],
              ["Water & Sanitation", "$41.6M (10.1%)"],
              ["Others", "$73.0M (17.6%)"],
            ].map(([l, v]) => (
              <li key={l} className="flex justify-between border-b border-panel-border/60 pb-1.5">
                <span className="text-muted-foreground">{l}</span>
                <span className="font-display text-sm">{v}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Grant Programs">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["UN SDG Innovation Grants", "Multi-Sector", "Up to $500K", "Rolling"],
              ["African Green Future Fund", "Climate & Environment", "Up to $1M", "15 Jun 2025"],
              ["Women in Tech Grants", "Technology & Innovation", "Up to $250K", "22 Jun 2025"],
              ["Community Impact Grants", "Community Development", "Up to $100K", "Rolling"],
            ].map(([n, c, a, d]) => (
              <div key={n} className="panel p-3">
                <div className="text-sm font-semibold">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-cyan">{c}</div>
                <div className="mt-2 text-xs text-gold">{a}</div>
                <div className="text-[10px] text-muted-foreground">Deadline: {d}</div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Featured Opportunities">
          <ul className="space-y-2 text-xs">
            {[
              ["Global Climate Innovation Fund", "Climate Action", "$15M", "12 days left"],
              ["Future of Education Challenge", "Education", "$10M", "35 days left"],
              ["Health Equity Accelerator", "Health & Wellbeing", "$8M", "22 days left"],
              ["Clean Energy Access Program", "Sustainable Energy", "$12M", "17 days left"],
            ].map(([t, c, v, d]) => (
              <li key={t} className="panel flex items-center justify-between p-2.5">
                <div>
                  <div className="text-[11px] font-semibold">{t}</div>
                  <div className="text-[10px] text-cyan">{c}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-sm text-gold">{v}</div>
                  <div className="text-[10px] text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Investors & Donors">
          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            {["Acumen", "Rockefeller Foundation", "Omidyar Network", "BlueOrchard Finance", "Tesla Foundation", "Gates Foundation"].map((n) => (
              <div key={n} className="panel p-2 text-cyan">{n}</div>
            ))}
          </div>
        </Panel>
        <Panel title="Community Fund">
          <Donut value={78} label="$3.12M / $4M" color="var(--accent-gold)" size={140} />
          <div className="mt-2 text-center text-xs text-muted-foreground">Crowdfund impactful ideas and community-led solutions.</div>
        </Panel>
        <Panel title="Impact Portfolio">
          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div className="panel p-2"><div className="font-display text-lg text-cyan">236</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Active Projects</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-violet">$189.3M</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Total Invested</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-emerald">14.2M</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Lives Impacted</div></div>
            <div className="panel p-2"><div className="font-display text-lg text-gold">87%</div><div className="text-[9px] uppercase tracking-widest text-muted-foreground">Success Rate</div></div>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
