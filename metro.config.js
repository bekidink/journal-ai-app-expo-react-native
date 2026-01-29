// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Block @vercel/oidc (and optionally gateway if it still sneaks in)
config.resolver.blockList = [
  ...(config.resolver.blockList || []),
  /@vercel\/oidc/,
  /@ai-sdk\/gateway/,
];

// Optional: If you still get deep imports, alias them to empty module
config.resolver.extraNodeModules = {
  "@vercel/oidc": require.resolve("empty-module"), // create empty-module.js with module.exports = {};
  "@ai-sdk/gateway": require.resolve("empty-module"),
};

module.exports = config;
