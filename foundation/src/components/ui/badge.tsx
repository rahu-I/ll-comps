import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg gap-1 border px-1 py-1.5 text-bistre text-xs	leading-1 font-medium border-none",
  {
    variants: {
      variant: {
        default: "bg-lavendar",
        ascend: "bg-green",
        warn: "bg-lace",
        descend: "bg-rose",
        orange: "bg-orange4",
        yellow: "bg-yellow4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
