import * as React from "react"

import { cn } from "@/lib/utils";

export const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full border rounded-md p-2 bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent",
        className
      )}
    />
  );
};