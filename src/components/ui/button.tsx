import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium rounded-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-xl shadow-soft",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium rounded-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        // Gamified variants
        hero: "bg-gradient-primary text-primary-foreground hover:scale-105 shadow-medium hover:shadow-strong rounded-2xl font-bold animate-pulse-glow",
        fun: "bg-gradient-accent text-accent-foreground hover:scale-105 hover:animate-wiggle shadow-soft hover:shadow-medium rounded-2xl font-bold",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-soft hover:shadow-medium rounded-xl hover:animate-bounce-soft",
        playful: "bg-gradient-secondary text-secondary-foreground hover:scale-105 shadow-soft hover:shadow-medium rounded-2xl font-semibold hover:animate-wiggle",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 rounded-lg",
        lg: "h-14 px-8 py-4 text-lg rounded-2xl",
        xl: "h-16 px-10 py-5 text-xl rounded-2xl",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
