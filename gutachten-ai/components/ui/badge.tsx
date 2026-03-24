import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "border-[0.5px] border-[#E8631A]/30 bg-[#E8631A]/5 text-[#E8631A]",
        secondary: "border-[0.5px] border-technical-line bg-surface-container text-on-surface-variant",
        outline: "border-[0.5px] border-technical-line text-on-surface",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
