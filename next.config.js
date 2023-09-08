const withPWA = require('next-pwa')({
    dest: 'public'
})

module.exports = withPWA({
    // next.js config
    images: {
        domains: ["cdn.sanity.io", "flowbite.s3.amazonaws.com"],
    }
})