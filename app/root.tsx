import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import theme from './lib/theme';

export const links: LinksFunction = () => {
  return [
    {
      href: '/favicon.svg',
      rel: 'icon',
      type: 'image/svg+xml',
    },
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      crossOrigin: 'anonymous',
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
      rel: 'stylesheet',
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Pureprofile | Community',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
