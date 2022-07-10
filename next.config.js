/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withTM = require('next-transpile-modules')

/** @type {import('next').NextConfig} */
const config = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  images: {
    domains: [''],
  },
}

module.exports = withBundleAnalyzer(withTM(config))
