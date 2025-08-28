import * as React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Panel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <section
    className={cx(
      "rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm",
      className
    )}
    {...props}
  />
);

export const PanelHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cx("px-5 py-3", className)} {...props} />;

export const PanelTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h3 className={cx("text-[14px] font-semibold text-slate-100", className)} {...props} />
);

export const PanelBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cx("px-5 pb-4", className)} {...props} />;
