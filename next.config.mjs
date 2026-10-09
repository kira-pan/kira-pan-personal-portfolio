/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old pages from the previous site now live as sections of the home page.
  // Temporary (307) while the redesign settles.
  async redirects() {
    return [
      { source: "/portfolio", destination: "/#studio", permanent: false },
      { source: "/projects", destination: "/#features", permanent: false },
      { source: "/publications", destination: "/#desk", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#about", permanent: false },
    ];
  },
};

export default nextConfig;
