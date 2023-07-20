/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'full-stack-ecommerce-clothing-web.vercel.app',
                port: '',
                pathname: '/_next/image'
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**'
            }
        ]
    },
}

module.exports = nextConfig
