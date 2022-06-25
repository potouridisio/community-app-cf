import ResponsiveDrawer from '~/components/responsive-drawer';
import auth from '~/images/auth.jpg';
import logo from '~/logo.svg';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from '@remix-run/react';

function AuthLayout() {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <AppBar>
        <Container maxWidth={false} sx={{ px: { lg: 8 } }}>
          <Toolbar sx={{ minHeight: { lg: 88 } }}>
            {upLg ? null : (
              <ResponsiveDrawer>
                <Box sx={{ p: 3 }}>
                  <LinksStack />
                </Box>
              </ResponsiveDrawer>
            )}
            <Box
              sx={{
                display: 'flex',
                flexGrow: {
                  lg: 1,
                },
                flexShrink: 0,
                m: {
                  lg: 0,
                  xs: '0 auto',
                },
                transform: {
                  lg: 'none',
                  xs: 'translateX(-24px)',
                },
              }}
            >
              <img alt="Pureprofile logo" height="36" src={logo} width="156" />
            </Box>
            {upLg ? <LinksStack direction="row" /> : null}
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        component="main"
        container
        sx={{ minHeight: { lg: 'calc(100vh - 88px)' } }}
      >
        <Grid alignItems="center" container item lg xs={12}>
          <Container
            sx={{
              '@media all': {
                maxWidth: 480,
              },
              py: { lg: 4, xs: 3 },
            }}
          >
            <Outlet />
          </Container>
        </Grid>
        <Grid
          item
          lg
          sx={{
            order: { lg: 0, xs: -1 },
            position: 'relative',
          }}
          xs={12}
        >
          <Box
            alt="Auth image"
            component="img"
            src={auth}
            sx={{
              display: 'block',
              height: upLg ? '100%' : 300,
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

function LinksStack({ direction }: { direction?: StackProps['direction'] }) {
  return (
    <Stack
      component="nav"
      direction={direction}
      spacing={{ lg: 8, xs: 4 }}
      sx={{
        '& > .MuiLink-root': {
          color: 'inherit',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <Link variant="body2">Contact Pureprofile</Link>
      <Link variant="body2">How to earn</Link>
      <Link variant="body2">The golden rules</Link>
      <Link variant="body2">Terms</Link>
    </Stack>
  );
}

export default AuthLayout;
