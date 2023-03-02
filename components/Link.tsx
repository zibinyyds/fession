import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";

import { classNames } from "../utils";

interface Props extends HTMLAttributes<HTMLElement> {
  href: string;
  external?: boolean;
  active?: boolean;
  primary?: boolean;
  iconClassName?: string;
}

const AppLink: FC<Props> = ({ active, children, className, iconClassName, external, href, primary, onClick }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        href={href}
        onClick={onClick}
        className={classNames(
          active && "bg-background-light text-primary-light",
          primary ? "text-accent" : "text-foreground",
          "group inline-flex items-center text-sm rounded-lg hover:text-primary-light transition duration-300 ease-in-out",
          className,
        )}
        {...(external && { target: "_blank", rel: "noopener" })}
      >
        {children}
        {external && (
          <LinkIcon
            className={classNames(
              primary ? "text-accent" : "text-foreground",
              "group-hover:text-primary-light ml-2 flex-shrink-0 h-4 w-4 transition duration-300 ease-in-out",
              iconClassName
            )}
            aria-hidden="true"
          />
        )}
      </a>
    </Link>
  );
};

export default AppLink;