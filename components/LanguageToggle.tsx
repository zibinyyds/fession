import { FC, ReactEventHandler, useState } from 'react';
import { CustomLink } from './Link';
import { useRouter } from 'next/router';

import { Menu, MenuItem, Button, ListItem, List, ListItemDecorator } from '@mui/joy';
import { useTranslation } from 'next-i18next';
import { ArrowRight, ArrowDropDown, Language } from '@mui/icons-material';

const languages = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: '简体中文',
    locale: 'zh',
  },
];

const languageNameFromLocale = (locale: string | undefined): string => {
  switch (locale) {
    case 'zh':
      return '简体中文';
    default:
      return 'English';
  }
};

const LanguageToggle: FC = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { locale, asPath } = router;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="group-demo-button"
        aria-controls={open ? 'group-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="soft"
        color="neutral"
        onClick={handleClick}
        endDecorator={<ArrowDropDown />}
      >
        <Language fontSize="small" />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <ListItem nested>
          <List aria-label="Font sizes">
            {languages.map(language => (
              <CustomLink href={`/${language.locale}${asPath}`} key={language.name} locale={language.locale}>
                <MenuItem
                  onClick={handleClose}
                  role="menuitemradio"
                  aria-checked={languageNameFromLocale(locale) === language.name ? 'true' : 'false'}
                >
                  <ArrowRight
                    sx={{
                      visibility: languageNameFromLocale(locale) === language.name ? '' : 'hidden',
                    }}
                  />
                  {language.name}
                </MenuItem>
              </CustomLink>
            ))}
          </List>
        </ListItem>
      </Menu>
    </>
  );
};

export default LanguageToggle;
