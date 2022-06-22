/** @type {import('next').NextConfig} */
/* eslint-disable */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
