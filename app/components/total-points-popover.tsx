import carret_down from '~/icons/carret-down.svg';
import total_points from '~/icons/total-points.svg';
import { darkTeal } from '~/lib/colors';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link } from '@remix-run/react';

import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function TotalPointsPopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        disableRipple
        endIcon={
          <img
            alt="Carret down icon"
            height="16"
            src={carret_down}
            width="16"
          />
        }
        onClick={handleClick}
        startIcon={
          <img
            alt="Total points icon"
            height="24"
            src={total_points}
            width="24"
          />
        }
      >
        <Typography
          component="span"
          sx={{
            display: {
              xs: 'none',
              sm: 'inline-block',
            },
            mr: 1,
          }}
          variant="inherit"
        >
          Total points
        </Typography>
        <Typography
          component="span"
          sx={{
            color: darkTeal[800],
            fontWeight: 'fontWeightBold',
          }}
        >
          9,661
        </Typography>
      </Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <Stack spacing={2.5} sx={{ p: (theme) => theme.spacing(3, 5) }}>
          <Typography component="div" sx={{ fontWeight: 600 }}>
            Points earned this month
            <Typography
              component="span"
              sx={{
                color: darkTeal[800],
                fontWeight: 'fontWeightBold',
                ml: 1,
              }}
            >
              40
            </Typography>
          </Typography>
          <MuiLink
            component={Link}
            onClick={handleClose}
            sx={{
              fontWeight: 600,
              textAlign: 'center',
            }}
            to="/activity-history"
          >
            View your activity history
          </MuiLink>
        </Stack>
      </Popover>
    </>
  );
}
