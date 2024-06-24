/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PATH_URL: 'http://3.70.236.23:7777/v1'
    },
    images:{
        domains: ['localhost', '3.70.236.23']
    }
};

export default nextConfig;
