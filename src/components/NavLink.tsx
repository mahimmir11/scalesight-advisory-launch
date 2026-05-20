'use client';

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, 'href'> {
  to: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(className, isActive ? activeClassName : undefined)}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
