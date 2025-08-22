import { Button, ButtonProps } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface ExternalLinkButtonProps extends Omit<ButtonProps, 'asChild'> {
  href: string;
  children: ReactNode;
  showIcon?: boolean;
}

export function ExternalLinkButton({ 
  href, 
  children, 
  showIcon = false, 
  className,
  "aria-label": ariaLabel,
  ...props 
}: ExternalLinkButtonProps) {
  return (
    <Button
      asChild
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        {children}
        {showIcon && <ExternalLink className="h-4 w-4" />}
      </a>
    </Button>
  );
}