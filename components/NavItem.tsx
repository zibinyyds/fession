import { FC, HTMLAttributes, ReactNode } from 'react';
import { CustomLink } from './Link';
import { ListItemButton, ListItemDecorator } from '@mui/joy';

interface Props extends HTMLAttributes<HTMLElement> {
  href: string;
  icon?: ReactNode;
  external?: boolean;
  selected?: boolean;
}

const NavItem: FC<Props> = ({ href, children, icon, selected }) => {
  return (
    <CustomLink href={href}>
      <ListItemButton variant="soft" selected={selected}>
        <ListItemDecorator>{icon}</ListItemDecorator>
        {children}
      </ListItemButton>
    </CustomLink>
  );
};

export default NavItem;
