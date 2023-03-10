import { Link } from '@mui/joy';
import { FC, ReactNode, MouseEvent } from 'react';
import { useRouter } from 'next/router';

interface Props {
  href?: any;
  locale?: string;
  children: ReactNode;
}

export const CustomLink: FC<Props> = ({ children, href, locale }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href, undefined, { locale });
  };

  return (
    <Link underline="none" onClick={handleClick}>
      {children}
    </Link>
  );
};
