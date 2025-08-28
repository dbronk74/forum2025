import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "success" | "warning";
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  tone = "neutral",
  ...props
}) => {
  const toneCls =
    tone === "success"
      ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
      : tone === "warning"
      ? "bg-amber-500/15 text-amber-300 ring-amber-500/30"
      : "bg-white/10 text-slate-200 ring-white/20";
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-lg px-2 py-0.5 text-[12px] ring-1",
        toneCls,
        className
      )}
      {...props}
    />
  );
};
