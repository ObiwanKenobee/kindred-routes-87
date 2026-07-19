import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home, BookOpen, Users, GraduationCap, Lightbulb, Heart, Leaf, Globe2,
  ShieldCheck, Cpu, Search, Bell, Settings, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Overview", icon: Home },
  { to: "/gospel-core", label: "Gospel Core", icon: BookOpen },
  { to: "/people", label: "People & Discipleship", icon: Users },
  { to: "/education", label: "Education & Learning", icon: GraduationCap },
  { to: "/innovation", label: "Innovation", icon: Lightbulb },
  { to: "/platform", label: "Platform", icon: Cpu },
  { to: "/intelligence", label: "Intelligence", icon: Sparkles },
  { to: "/health", label: "Health & Wellbeing", icon: Heart },
  { to: "/stewardship", label: "Stewardship & Creation", icon: Leaf },
  { to: "/impact", label: "Impact", icon: Globe2 },
  { to: "/governance", label: "Governance", icon: ShieldCheck },
] as const;

export function AppShell({
  title,
  subtitle,
  side,
  children,
}: {
  title: string;
  subtitle?: string;
  side?: ReactNode;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen">
      <TopBar pathname={pathname} />
      <div className="mx-auto grid max-w-[1600px] gap-5 px-4 pb-10 pt-5 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          {side ?? <DefaultSide />}
        </aside>
        <main className="min-w-0 space-y-5">
          <header className="text-center">
            <h1 className="font-display text-4xl tracking-[0.15em] text-foreground md:text-5xl">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-muted-foreground md:text-base">{subtitle}</p>}
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}

function TopBar({ pathname }: { pathname: string }) {
  return (
    <div className="sticky top-0 z-40 border-b border-panel-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-cyan/30 to-violet/30 ring-1 ring-cyan/40">
            <div className="size-4 rotate-45 bg-gradient-to-br from-cyan to-violet" style={{ clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)" }} />
          </div>
          <div className="hidden md:block">
            <div className="font-display text-sm font-semibold tracking-wider">AEON GENESIS OS</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Renaissance Systems Architecture</div>
          </div>
        </Link>
        <nav className="mx-auto flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = pathname === to || (to !== "/" && pathname.startsWith(to));
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wider transition",
                  active
                    ? "border-b-2 border-cyan text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                <span className="hidden xl:inline">{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button className="grid size-9 place-items-center rounded-lg border border-panel-border bg-panel text-muted-foreground hover:text-foreground"><Search className="size-4" /></button>
          <button className="relative grid size-9 place-items-center rounded-lg border border-panel-border bg-panel text-muted-foreground hover:text-foreground">
            <Bell className="size-4" />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose" />
          </button>
          <button className="hidden md:grid size-9 place-items-center rounded-lg border border-panel-border bg-panel text-muted-foreground hover:text-foreground"><Settings className="size-4" /></button>
          <div className="hidden md:flex items-center gap-2 rounded-lg border border-panel-border bg-panel px-2.5 py-1.5">
            <div className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-[10px] font-bold">SA</div>
            <div className="text-right">
              <div className="text-xs font-semibold leading-tight">Shalom, Architect</div>
              <div className="text-[10px] text-muted-foreground">Kingdom Builder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SideNav({
  heading,
  items,
  footer,
}: {
  heading: string;
  items: { label: string; icon?: ReactNode; active?: boolean }[];
  footer?: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="panel p-3">
        <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{heading}</div>
        <ul className="space-y-0.5">
          {items.map((it, i) => (
            <li key={i}>
              <button
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition",
                  it.active
                    ? "bg-gradient-to-r from-cyan/20 to-transparent text-foreground ring-1 ring-cyan/40"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                {it.icon && <span className="size-4 shrink-0">{it.icon}</span>}
                <span className="truncate">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {footer}
    </div>
  );
}

function DefaultSide() {
  return (
    <SideNav
      heading="Core Systems"
      items={NAV.slice(1, 8).map((n) => ({ label: n.label, icon: <n.icon className="size-4" /> }))}
    />
  );
}
