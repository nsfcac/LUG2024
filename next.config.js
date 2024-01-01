/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    //
    // // Add basePath
    // basePath: '/lug2024',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
