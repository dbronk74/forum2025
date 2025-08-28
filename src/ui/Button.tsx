import * as React from "react";

type Variant = "solid" | "ghost" | "muted";
type Size = "sm" | "md";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-9 px-3.5 text-[14px]",
};

const variantMap: Record<Variant, string> = {
  solid:
    "bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 active:bg-emerald-600",
  ghost:
    "bg-transparent text-slate-200 hover:bg-white/5 active:bg-white/10 border border-white/10",
  muted:
    "bg-slate-800/70 text-slate-200 border border-white/10 hover:bg-slate-800 active:bg-slate-900",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(base, sizeMap[size], variantMap[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
