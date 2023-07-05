/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // images: {
  //   domains: ["firebasestorage.googleapis.com", "localhost"],
  //   loader: "akamai",
  //   path: "",
  // },
  generateBuildId: () => "my-project-deploy",
}

module.exports = nextConfig
