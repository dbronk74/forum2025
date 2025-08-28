import * as React from "react";
import { Link, useLocation } from "react-router-dom";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { to: "/", label: "Home" },
  { to: "/forum", label: "Forum" },
  { to: "/gauntlet", label: "Gauntlet" },
  { to: "/arena", label: "WorldSpeak" },
  { to: "/oracle", label: "Oracle" },
  { to: "/vault", label: "Vault" },
];

export default function BranchHeader() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="page flex h-12 items-center justify-between">
        <Link
          to="/"
          className="hover-glow rounded-lg px-1.5 py-0.5 text-[15px] font-semibold tracking-tight text-slate-200 focus-ring"
        >
          The Forum <span className="text-emerald-400">2025</span>
        </Link>

        <nav className="flex items-center gap-1">
          {tabs.map((t) => {
            const active = pathname === t.to;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "rounded-lg px-2.5 py-1 text-[13px] font-medium focus-ring transition",
                  active
                    ? "bg-emerald-600/90 text-white shadow-sm"
                    : "text-slate-300 hover:bg-white/5 active:bg-white/10"
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
