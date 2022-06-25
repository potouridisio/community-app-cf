import logo from '~/logo.svg';
import LeftNavigation from '~/components/left-navigation';
import ResponsiveDrawer from '~/components/responsive-drawer';
import RightNavigation from '~/components/right-navigation';
import TotalPointsPopover from '~/components/total-points-popover';
import { darkGrey } from '~/lib/colors';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, Outlet } from '@remix-run/react';

export default function Community() {
  const theme = useTheme();
  const onlyLg = useMediaQuery(theme.breakpoints.only('lg'));
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  const upXl = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ bgcolor: darkGrey[100], minHeight: '100vh' }}>
      <AppBar>
        <Container>
          <Toolbar>
            {upLg ? null : (
              <ResponsiveDrawer closeOnRouteChange>
                <LeftNavigation
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                />
              </ResponsiveDrawer>
            )}
            <MuiLink
              component={Link}
              sx={{ display: 'inline-flex', flexShrink: 0 }}
              to="/surveys"
            >
              <img alt="Pureprofile logo" height="36" src={logo} width="156" />
            </MuiLink>
            <Box sx={{ flexGrow: 1 }} />
            <TotalPointsPopover />
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container sx={{ py: { lg: 4, xs: 3 } }}>
          <Grid container spacing={{ lg: 4, xs: 3 }}>
            {upLg ? (
              <Grid item xs="auto">
                <Stack spacing={4} sx={{ position: 'sticky', top: 96 }}>
                  <Box sx={{ bgcolor: 'background.paper', width: 240 }}>
                    <LeftNavigation />
                  </Box>
                  {onlyLg ? (
                    <RightNavigation
                      sx={{ bgcolor: 'background.paper', width: 240 }}
                    />
                  ) : null}
                </Stack>
              </Grid>
            ) : null}
            <Grid item xs>
              <Outlet />
            </Grid>
            {upXl ? (
              <Grid item xs="auto">
                <Box sx={{ position: 'sticky', top: 96 }}>
                  <RightNavigation
                    sx={{ bgcolor: 'background.paper', width: 240 }}
                  />
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </main>
    </Box>
  );
}
