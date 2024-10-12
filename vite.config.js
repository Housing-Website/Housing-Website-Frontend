import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 네트워크 외부에서 접근 가능하게 설정
    port: 5173, // 사용하고자 하는 포트를 명시적으로 설정
    proxy: {
      '/submit': { // 클라이언트에서 보낼 경로에 대한 설정
        target: 'http://15.165.243.66:5001', // AWS 서버의 퍼블릭 IP와 포트 번호
        changeOrigin: true,
        secure: false, // HTTPS를 사용하지 않을 경우 false로 설정
      },
    },
  },
})