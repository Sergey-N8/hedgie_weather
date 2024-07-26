// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherapi.com',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig