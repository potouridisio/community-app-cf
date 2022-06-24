import surveys from '~/icons/surveys.svg';

import List from '@mui/material/List';
import type { ListProps } from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useLocation } from '@remix-run/react';

export default function LeftNavigation(props: ListProps) {
  const { pathname } = useLocation();

  return (
    <List component="nav" {...props}>
      <ListItemButton
        component={NavLink}
        selected={pathname === '/surveys'}
        to="/surveys"
      >
        <ListItemIcon>
          <img alt="Surveys icon" height="24" src={surveys} width="24" />
        </ListItemIcon>
        <ListItemText primary="Surveys" />
      </ListItemButton>
    </List>
  );
}
