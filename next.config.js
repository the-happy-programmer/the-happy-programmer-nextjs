module.exports = {
  images: {
    domains: ["secure.gravatar.com"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

//token: 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
