module.exports = {
  images: {
    domains: [
      "secure.gravatar.com",
      "i1.wp.com",
      "i2.wp.com",
      "https://i2.wp.com/thehappyprogrammer.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
