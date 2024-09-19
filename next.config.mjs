/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com', // Add this line
                port: '',
                pathname: '/**', // Adjust the pathname as necessary
            },
        ],
    },
};

export default nextConfig;