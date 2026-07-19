import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Radial hexagon dashboard centerpiece */
export function GospelWheel({
  centerTitle,
  centerSubtitle,
  segments,
  size = 520,
}: {
  centerTitle: string;
  centerSubtitle?: string;
  segments: { label: string; sublabel?: string; color: string; icon?: ReactNode }[];
  size?: number;
}) {
  const N = segments.length;
  const outer = size / 2;
  const inner = size * 0.28;
  const midR = size * 0.36;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size, maxWidth: "100%" }}>
      {/* halo */}
      <div className="absolute inset-8 rounded-full opacity-40 blur-2xl" style={{ background: "conic-gradient(from 0deg, var(--accent-violet), var(--accent-cyan), var(--accent-emerald), var(--accent-gold), var(--accent-rose), var(--accent-violet))" }} />
      <svg viewBox={`0 0 ${size} ${size}`} className="relative z-10 h-full w-full">
        <defs>
          {segments.map((s, i) => (
            <radialGradient key={i} id={`seg-${i}`} cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.05" />
              <stop offset="70%" stopColor={s.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0.45" />
            </radialGradient>
          ))}
        </defs>
        {segments.map((s, i) => {
          const a0 = (i / N) * Math.PI * 2 - Math.PI / 2 - Math.PI / N;
          const a1 = ((i + 1) / N) * Math.PI * 2 - Math.PI / 2 - Math.PI / N;
          const x0o = outer + outer * Math.cos(a0);
          const y0o = outer + outer * Math.sin(a0);
          const x1o = outer + outer * Math.cos(a1);
          const y1o = outer + outer * Math.sin(a1);
          const x1i = outer + inner * Math.cos(a1);
          const y1i = outer + inner * Math.sin(a1);
          const x0i = outer + inner * Math.cos(a0);
          const y0i = outer + inner * Math.sin(a0);
          return (
            <path
              key={i}
              d={`M ${x0o} ${y0o} A ${outer} ${outer} 0 0 1 ${x1o} ${y1o} L ${x1i} ${y1i} A ${inner} ${inner} 0 0 0 ${x0i} ${y0i} Z`}
              fill={`url(#seg-${i})`}
              stroke={s.color}
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          );
        })}
        <circle cx={outer} cy={outer} r={inner} fill="oklch(0.14 0.03 260)" stroke="oklch(0.75 0.16 210 / 0.6)" strokeWidth="1.5" />
        <circle cx={outer} cy={outer} r={inner - 8} fill="none" stroke="oklch(0.75 0.16 210 / 0.3)" strokeWidth="1" />
      </svg>
      {/* segment labels */}
      {segments.map((s, i) => {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2;
        const x = outer + midR * Math.cos(a);
        const y = outer + midR * Math.sin(a);
        return (
          <div
            key={i}
            className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
            style={{ left: x, top: y }}
          >
            <div className="mb-1 grid size-8 place-items-center rounded-full bg-white/5 ring-1" style={{ color: s.color, boxShadow: `0 0 20px -4px ${s.color}` }}>
              {s.icon}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-foreground">{s.label}</div>
            {s.sublabel && <div className="text-[9px] text-muted-foreground">{s.sublabel}</div>}
          </div>
        );
      })}
      {/* center */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="mb-1 text-2xl">✝</div>
          <div className="font-display text-xl font-semibold tracking-widest text-cyan text-glow">{centerTitle}</div>
          {centerSubtitle && <div className="mt-1 max-w-[10rem] text-[10px] leading-relaxed text-muted-foreground">{centerSubtitle}</div>}
        </div>
      </div>
    </div>
  );
}

/** Small icon pipeline row */
export function Pipeline({
  steps,
}: {
  steps: { label: string; sub?: string; color: string; icon?: ReactNode }[];
}) {
  return (
    <div className="flex items-stretch gap-2 overflow-x-auto scrollbar-thin">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="panel min-w-[130px] px-3 py-2.5 text-center" style={{ borderColor: `${s.color}55` }}>
            <div className="mx-auto mb-1 grid size-8 place-items-center rounded-full ring-1" style={{ color: s.color, boxShadow: `0 0 16px -4px ${s.color}` }}>
              {s.icon}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground">{s.label}</div>
            {s.sub && <div className="text-[9px] text-muted-foreground">{s.sub}</div>}
          </div>
          {i < steps.length - 1 && <div className="text-muted-foreground">›</div>}
        </div>
      ))}
    </div>
  );
}

/** Donut with center label */
export function Donut({
  value,
  label,
  color = "oklch(0.78 0.16 165)",
  size = 140,
}: {
  value: number; // 0-100
  label: string;
  color?: string;
  size?: number;
}) {
  const r = size / 2 - 10;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(0.28 0.04 265)" strokeWidth="8" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={off}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-3xl text-foreground">{value}<span className="text-sm text-muted-foreground">%</span></div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

/** Progress bar row */
export function BarRow({ label, value, max = 100, color = "oklch(0.75 0.16 210)" }: { label: string; value: number; max?: number; color?: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{value}/{max}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color, boxShadow: `0 0 8px ${color}` }} />
      </div>
    </div>
  );
}

/** Global star map placeholder */
export function GlobeMap({ caption }: { caption?: string }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-panel-border bg-[radial-gradient(ellipse_at_center,oklch(0.20_0.06_240)_0%,oklch(0.10_0.02_260)_70%)]">
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full opacity-70">
        {Array.from({ length: 180 }).map((_, i) => {
          const x = Math.random() * 400;
          const y = Math.random() * 200;
          const r = Math.random() * 1.4 + 0.4;
          const c = ["#5cbdb9", "#a78bfa", "#34d399", "#facc15", "#f472b6"][Math.floor(Math.random() * 5)];
          return <circle key={i} cx={x} cy={y} r={r} fill={c} opacity={Math.random() * 0.6 + 0.3} />;
        })}
      </svg>
      {caption && <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-widest text-muted-foreground">{caption}</div>}
    </div>
  );
}

export function LayerCard({ label, sub, tone = "cyan", active }: { label: string; sub: string; tone?: string; active?: boolean }) {
  const map: Record<string, string> = {
    cyan: "border-cyan/50 shadow-[0_0_24px_-8px_var(--accent-cyan)]",
    violet: "border-violet/50 shadow-[0_0_24px_-8px_var(--accent-violet)]",
    emerald: "border-emerald/50",
    gold: "border-gold/60 shadow-[0_0_24px_-8px_var(--accent-gold)]",
    rose: "border-rose/50",
    blue: "border-blue/50",
  };
  return (
    <div className={cn("panel flex items-center gap-3 px-4 py-3", map[tone], active && "ring-1 ring-cyan/60")}>
      <div className={cn("size-9 shrink-0 rounded-lg bg-white/5 grid place-items-center", `text-${tone}`)}>◆</div>
      <div className="min-w-0">
        <div className="text-[11px] font-bold uppercase tracking-wider text-foreground">{label}</div>
        <div className="truncate text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
