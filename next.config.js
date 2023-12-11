const withNextra = require("nextra")({
  assetPrefix: "/hyper-modern.github.io/",
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
});
