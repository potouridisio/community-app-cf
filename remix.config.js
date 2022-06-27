/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildTarget: 'cloudflare-workers',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
