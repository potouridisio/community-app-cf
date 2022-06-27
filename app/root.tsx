import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => {
  return [
    {
      href: '/favicon.svg',
      rel: 'icon',
      type: 'image/svg+xml',
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
