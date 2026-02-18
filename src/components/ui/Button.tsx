import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "rounded-2xl px-5 py-3 text-sm font-semibold transition ring-1 focus:outline-none focus:ring-2 focus:ring-white/30";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400/20 via-emerald-400/15 to-orange-400/20 text-white ring-white/15 hover:ring-white/25 hover:bg-white/10"
      : "bg-white/8 text-white ring-white/12 hover:bg-white/12 hover:ring-white/20";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
