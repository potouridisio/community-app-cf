import account_details from '~/icons/account-details.svg';
import activity_history from '~/icons/activity-history.svg';
import arrow from '~/icons/arrow.svg';
import my_account from '~/icons/my-account.svg';
import redemptions from '~/icons/redemptions.svg';
import refer_a_friend from '~/icons/refer-a-friend.svg';
import rewards from '~/icons/rewards.svg';
import surveys from '~/icons/surveys.svg';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
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
      {[
        [surveys, 'Surveys', '/surveys'],
        [rewards, 'Rewards', '/rewards'],
        [redemptions, 'Redemptions', '/redemptions'],
        [refer_a_friend, 'Refer a friend', '/refer-a-friend'],
      ].map(([icon, primary, to]) => (
        <ListItemButton
          component={NavLink}
          key={to}
          selected={pathname === to}
          to={to}
        >
          <ListItemIcon>
            <img alt={`${primary} icon`} height="24" src={icon} width="24" />
          </ListItemIcon>
          <ListItemText primary={primary} />
        </ListItemButton>
      ))}
      <Divider sx={{ my: 2 }} />
      <ListItemButton
        component={NavLink}
        selected={pathname === '/activity-history'}
        to="/activity-history"
      >
        <ListItemIcon>
          <img
            alt="Activity history icon"
            height="24"
            src={activity_history}
            width="24"
          />
        </ListItemIcon>
        <ListItemText primary="Activity history" />
      </ListItemButton>
      <MyAccountListItemButton />
    </List>
  );
}

function MyAccountListItemButton() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(pathname === '/account-details');

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>
          <img alt="My account icon" height="24" src={my_account} width="24" />
        </ListItemIcon>
        <ListItemText primary="My account" />
        <Box
          sx={{
            display: 'inline-flex',
            mr: -1,
            transform: open ? 'rotate(180deg)' : undefined,
          }}
        >
          <img alt="Arrow icon" height="24" src={arrow} width="24" />
        </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            '& > .MuiListItemButton-root': {
              '&:before': {
                left: 'auto',
                right: 0,
              },
              pl: 5,
            },
          }}
        >
          <ListItemButton
            component={NavLink}
            selected={pathname === '/account-details'}
            to="/account-details"
          >
            <ListItemIcon>
              <img
                alt="Account details icon"
                height="24"
                src={account_details}
                width="24"
              />
            </ListItemIcon>
            <ListItemText primary="Account details" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
