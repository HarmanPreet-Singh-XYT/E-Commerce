/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{hostname:'cdn3d.iconscout.com'}],
    },
};

export default nextConfig;
