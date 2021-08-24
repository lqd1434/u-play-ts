const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://lqd1314.xyz:8080',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/',
            },
        }),
    )
}
