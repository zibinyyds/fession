import { FC } from 'react';
import { Sheet, Box } from '@mui/joy';
import LanguageToggle from './LanguageToggle';
import ModeToggle from './ModeToggle';
import ConnectMetamask from '@/wallet/ConnectMetaMask';

interface Props {
  PageTitle: FC;
}

const TopNavbar: FC<Props> = ({ PageTitle }) => (
  <Sheet
    // variant="outlined"
    // variant="soft"
    sx={{
      display: 'flex',
      height: '30px',
      // width: 'calc(100% - 600px)',
      padding: '2px',
      alignItems: 'center',
      flexGrow: 1,
      p: 2,
      borderBottom: '1px solid',
      borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
      minWidth: 'min-content',
    }}
  >
    <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}></Box>
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flexShrink: 0 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <ConnectMetamask />
        <LanguageToggle />
        <ModeToggle />
      </Box>
    </Box>
  </Sheet>
);

export default TopNavbar;
