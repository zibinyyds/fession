import { useColorScheme } from '@mui/joy';
import { useState, useEffect, useMemo } from 'react';
import { IconButton } from '@mui/joy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function ModeToggle() {

  const { mode, setMode } = useColorScheme();

  const isLight = useMemo(() => {
    return mode === 'light';
  }, [mode]);

  return (
    <IconButton
      variant="soft"
      onClick={() => {
        setMode(isLight ? 'dark' : 'light');
      }}
    >
      {isLight ? <DarkModeIcon/> : <LightModeIcon/>}
    </IconButton>
  );
}
