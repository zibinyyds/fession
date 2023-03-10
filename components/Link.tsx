import { Link } from '@mui/joy';
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
// import { Url } from 'next';


type Locale = 'zh' | 'cn';

interface Props {
  href?: Url;
  locale?: Locale;
  children: ReactNode
}

export const CustomLink: FC<Props> = ({ children, href, locale }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href, undefined, { locale });
  };

  return (
    <Link underline="none" onClick={handleClick}>
      {children}
    </Link>
  );
};
