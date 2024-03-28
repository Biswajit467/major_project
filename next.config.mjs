// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com"], 
  },
};

const nextConfigWithRewrites = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: "/media/:path*",
        destination: "http://localhost:8000/media/:path*", // Rewrite requests to your Django server
      },
    ];
  },
};

export default nextConfigWithRewrites;
