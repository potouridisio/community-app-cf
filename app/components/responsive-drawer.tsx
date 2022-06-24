import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import close from '~/icons/close.svg';
import menu from '~/icons/menu.svg';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useLocation } from '@remix-run/react';

interface ResponsiveDrawerProps {
  children?: ReactNode;
  closeOnRouteChange?: boolean;
}

const drawerBleeding = 64;
const drawerWidth = 240;

export default function ResponsiveDrawer({
  children,
  closeOnRouteChange,
}: ResponsiveDrawerProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!closeOnRouteChange) {
      return undefined;
    }

    setOpen(false);
  }, [closeOnRouteChange, location]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        aria-label={`${open ? 'Close' : 'Open'} drawer`}
        onClick={handleDrawerToggle}
        sx={{ ml: -1, mr: 2 }}
      >
        <img
          alt={`${open ? 'Close' : 'Menu'} icon`}
          height="24"
          src={open ? close : menu}
          width="24"
        />
      </IconButton>
      <Drawer
        onClose={handleDrawerToggle}
        open={open}
        sx={{
          '& .MuiBackdrop-root': {
            top: drawerBleeding,
          },
          '& .MuiPaper-root': {
            height: `calc(100% - ${drawerBleeding}px)`,
            top: drawerBleeding,
            width: drawerWidth,
          },
          top: drawerBleeding,
        }}
      >
        {children}
      </Drawer>
    </>
  );
}
