import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-900 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]",
        glass:
          "bg-white/[0.03] backdrop-blur-md border border-white/20 text-white hover:bg-white/[0.08] hover:border-white/30 relative overflow-hidden",
        ghost: "text-white/80 hover:text-white hover:bg-white/10",
        outline:
          "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        link: "text-cyan-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4",
        lg: "h-11 px-5",
        xl: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    "data-slot": "button",
    className: cn(buttonVariants({ variant, size, className })),
    type: typeValue,
  };

  const element = useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  });

  // Add glass shine effect for glass variant
  if (variant === "glass") {
    return (
      <span className="relative inline-flex rounded-lg overflow-hidden">
        {element}
        {/* Top shine line */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        {/* Left rim light */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent" />
      </span>
    );
  }

  return element;
}

export { Button, buttonVariants };
