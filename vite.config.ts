import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  server: {
    proxy: {
      // Proxy dla zapytań do n8n
      '/api/n8n': {
        target: 'https://nox29a.app.n8n.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/n8n/, '/webhook/coaching-form'),
        secure: false,
      }
    }
  },
  // Opcjonalnie: konfiguracja dla preview (production)
  preview: {
    proxy: {
      '/api/n8n': {
        target: 'https://nox29a.app.n8n.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/n8n/, '/webhook/coaching-form'),
        secure: false,
      }
    }
  }
})
