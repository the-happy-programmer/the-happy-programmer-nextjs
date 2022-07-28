module.exports = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: { allowFutureImage: true },
  },
  images: {
    domains: [
      'secure.gravatar.com',
      'i1.wp.com',
      'i2.wp.com',
      'https://i2.wp.com/thehappyprogrammer.com',
      'lh3.googleusercontent.com',
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat',
    //   })
    // }
    return config
  },
}
