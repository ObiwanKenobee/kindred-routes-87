import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { AppShell } from "./AppShell";
import { sectionForPath } from "@/lib/platform-navigation";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen px-4 py-5" aria-label="Loading dashboard" aria-busy="true">
      <div className="mx-auto grid max-w-[1600px] gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div className="hidden h-[560px] animate-pulse rounded-lg border border-panel-border bg-panel lg:block" />
        <div className="space-y-5">
          <div className="mx-auto h-12 w-2/3 animate-pulse rounded-md bg-muted" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[0, 1, 2, 3].map((key) => <div key={key} className="h-28 animate-pulse rounded-lg border border-panel-border bg-panel" />)}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="h-80 animate-pulse rounded-lg border border-panel-border bg-panel" />
            <div className="h-80 animate-pulse rounded-lg border border-panel-border bg-panel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const section = sectionForPath(pathname);
  return (
    <AppShell title={section?.title ?? "AEON GENESIS OS"} subtitle="This section is temporarily unavailable.">
      <section className="panel mx-auto max-w-2xl p-8 text-center" role="alert">
        <AlertTriangle className="mx-auto size-8 text-gold" />
        <h2 className="mt-4 text-lg font-semibold">This dashboard didn’t load</h2>
        <p className="mt-2 text-sm text-muted-foreground">Your navigation is still available. Retry this section or return to its overview.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground" onClick={() => { router.invalidate(); reset(); }}>
            <RotateCcw className="size-4" /> Retry
          </button>
          <Link to={section?.path === "/" || !section ? "/" : "/$"} params={section?.path === "/" || !section ? undefined : { _splat: section.path.slice(1) }} className="rounded-md border border-panel-border bg-panel px-4 py-2 text-sm font-semibold">
            Section overview
          </Link>
        </div>
        {import.meta.env.DEV && <p className="mt-5 text-xs text-muted-foreground">{error.message}</p>}
      </section>
    </AppShell>
  );
}