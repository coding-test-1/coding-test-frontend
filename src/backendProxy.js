const { createProxyMiddleware } = require("http-proxy-middleware");

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:8000/pariksha", // Replace with your backend API URL
      changeOrigin: true,
    })
  );
}
