export default defineNuxtConfig({
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://example.com',
        changeOrigin: true,
        ws: true, // 启用WebSocket代理
      }
    }
  }
});
