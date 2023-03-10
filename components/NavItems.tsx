import { FC, MouseEventHandler } from 'react';
import { PieChart } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import NavItem from './NavItem';

interface Props {
  onClick?: MouseEventHandler;
}

const NavItems: FC<Props> = ({ onClick }) => {
  const { t } = useTranslation('common');
  const { basePath, pathname } = useRouter();
  console.log(basePath, pathname);

  const navigation = [
    { name: t('nav.index'), href: '/', icon: <PieChart /> },
    {
      name: t('nav.list'),
      href: '/list',
      icon: <PieChart />,
    },
    { name: t('nav.test'), href: '/test', icon: <PieChart /> },
  ];

  return (
    <>
      {navigation.map(item => (
        <NavItem key={item.name} icon={item.icon} href={item.href} onClick={onClick} selected={pathname === item.href}>
          {item.name}
        </NavItem>
      ))}
    </>
  );
};

export default NavItems;
