import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { AppShell, SideNav } from "@/components/aeon/AppShell";
import { Panel } from "@/components/aeon/Panel";
import { cn } from "@/lib/utils";
import {
  Users, UserRound, Route as RouteIcon, MessagesSquare, Sprout, GraduationCap,
  ClipboardList, HeartHandshake, Star, BookOpen, Bell, Calendar, Phone, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "People & Discipleship — AEON GENESIS OS" }] }),
  component: PeopleLayout,
});

const NAV = [
  { to: "/people", label: "People Overview", icon: <Users className="size-4" /> },
  { to: "/people/journey", label: "Spiritual Journey", icon: <RouteIcon className="size-4" /> },
  { to: "/people/groups", label: "Groups & Communities", icon: <MessagesSquare className="size-4" /> },
  { to: "/people/mentorship", label: "Mentorship", icon: <HeartHandshake className="size-4" /> },
  { to: "/people/pathways", label: "Discipleship Pathways", icon: <Sprout className="size-4" /> },
  { to: "/people/training", label: "Training & Resources", icon: <GraduationCap className="size-4" /> },
  { to: "/people/assignments", label: "Assignments", icon: <ClipboardList className="size-4" /> },
  { to: "/people/care", label: "Care & Follow-up", icon: <Phone className="size-4" /> },
  { to: "/people/milestones", label: "Milestones", icon: <Star className="size-4" /> },
  { to: "/people/testimonies", label: "Testimony & Stories", icon: <BookOpen className="size-4" /> },
];

const TOOLS = [
  { label: "People Directory", icon: <UserRound className="size-4" /> },
  { label: "Communication Hub", icon: <MessagesSquare className="size-4" /> },
  { label: "Event Management", icon: <Calendar className="size-4" /> },
  { label: "Content Library", icon: <BookOpen className="size-4" /> },
  { label: "Coaching Center", icon: <HeartHandshake className="size-4" /> },
  { label: "Prayer Network", icon: <Sparkles className="size-4" /> },
  { label: "Insights & Reports", icon: <ClipboardList className="size-4" /> },
];

function PeopleLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AppShell
      title="PEOPLE & DISCIPLESHIP"
      subtitle="Every Person. Every Step. Every Nation."
      side={
        <div className="space-y-4">
          <div className="panel p-3">
            <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Discipleship Journey</div>
            <ul className="space-y-0.5">
              {NAV.map((n) => {
                const active = pathname === n.to;
                return (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition",
                        active
                          ? "bg-gradient-to-r from-cyan/20 to-transparent text-foreground ring-1 ring-cyan/40"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                      )}
                    >
                      {n.icon}
                      <span className="truncate">{n.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <SideNav heading="Tools & Systems" items={TOOLS} />
          <Panel title="Quick Actions">
            <div className="space-y-1.5">
              {["Add New Person", "Create Group", "Assign Mentor", "Send Devotional", "Schedule Event"].map((a) => (
                <button key={a} className="w-full rounded-md border border-panel-border bg-white/5 px-3 py-1.5 text-left text-xs text-foreground hover:bg-white/10">
                  {a}
                </button>
              ))}
            </div>
          </Panel>
          <Panel>
            <p className="text-center text-xs italic leading-relaxed text-muted-foreground">
              "Go therefore and make disciples of all nations..."
            </p>
            <p className="mt-1 text-center text-[10px] uppercase tracking-widest text-cyan">Matthew 28:19</p>
          </Panel>
        </div>
      }
    >
      <Outlet />
    </AppShell>
  );
}
