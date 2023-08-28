import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://c-campus-bucket.s3.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
    })
  );
};
