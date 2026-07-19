import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  children,
  className,
  title,
  action,
  accent,
}: {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  action?: ReactNode;
  accent?: "cyan" | "violet" | "emerald" | "gold" | "rose" | "blue";
}) {
  const accentBar: Record<string, string> = {
    cyan: "from-cyan/70",
    violet: "from-violet/70",
    emerald: "from-emerald/70",
    gold: "from-gold/70",
    rose: "from-rose/70",
    blue: "from-blue/70",
  };
  return (
    <section className={cn("panel panel-hover relative overflow-hidden p-5", className)}>
      {accent && (
        <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent", accentBar[accent])} />
      )}
      {(title || action) && (
        <header className="mb-4 flex items-center justify-between gap-3">
          {typeof title === "string" ? (
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h3>
          ) : (
            title
          )}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function Stat({
  label,
  value,
  delta,
  icon,
  tone = "cyan",
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  tone?: "cyan" | "violet" | "emerald" | "gold" | "rose" | "blue";
}) {
  const tones: Record<string, string> = {
    cyan: "text-cyan",
    violet: "text-violet",
    emerald: "text-emerald",
    gold: "text-gold",
    rose: "text-rose",
    blue: "text-blue",
  };
  return (
    <div className="panel panel-hover p-4">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {icon && <span className={cn("grid size-7 place-items-center rounded-md bg-white/5", tones[tone])}>{icon}</span>}
        <span>{label}</span>
      </div>
      <div className="mt-2 font-display text-3xl text-foreground">{value}</div>
      {delta && <div className={cn("mt-1 text-xs font-medium", tones[tone])}>{delta}</div>}
    </div>
  );
}
