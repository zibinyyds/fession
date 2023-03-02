import { FC, MouseEventHandler } from "react";
import {
  BoltSlashIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";

import NavItem from "./NavItem";

interface Props {
  onClick?: MouseEventHandler;
}

const NavItems: FC<Props> = ({ onClick }) => {
  const { t } = useTranslation("common");

  const navigation = [
    { name: t("nav.index"), href: "/", icon: TruckIcon },
    {
      name: t("nav.list"),
      href: "/list",
      icon: BoltSlashIcon,
    },
    { name: t("nav.test"), href: "/test", icon: UserGroupIcon },
  ];

  return (
    <nav className="flex-1 space-y-2">
      {navigation.map((item) => (
        <NavItem
          key={item.name}
          Icon={item.icon}
          href={item.href}
          onClick={onClick}
        >
          {item.name}
        </NavItem>
      ))}
    </nav>
  );
};

export default NavItems;
