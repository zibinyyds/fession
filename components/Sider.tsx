import NavItems from './NavItems';
import Image from 'next/image';
import { AspectRatio } from '@mui/joy';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';

export default function ColorInversionNavigation() {
  return (
    <Box sx={{ display: 'flex', borderRight: '1px solid', borderColor: 'var(--joy-palette-neutral-outlinedBorder)' }}>
      <Sheet
        sx={theme => {
          return {
            p: 2,
            //   background: `linear-gradient(to top, ${theme.vars.palette.info[700]}, ${theme.vars.palette.info[600]} 25%, ${theme.vars.palette.info[500]} 75%)`,
          };
        }}
      >
        <Box
          sx={{
            height: '30px',
            p: 1,
            borderBottom: '1px solid',
            borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
          }}
        >
          Fession
        </Box>
        <List
          sx={{
            '--List-item-radius': '8px',
            '--List-gap': '8px',
            flexGrow: 0,
            minWidth: 256,
          }}
        >
          <NavItems />
        </List>
      </Sheet>
    </Box>
  );
}
