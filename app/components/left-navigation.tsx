import activity_history from '~/icons/activity-history.svg';
import redemptions from '~/icons/redemptions.svg';
import refer_a_friend from '~/icons/refer-a-friend.svg';
import rewards from '~/icons/rewards.svg';
import surveys from '~/icons/surveys.svg';

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
    </List>
  );
}
