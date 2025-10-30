import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    // {
    //   name: "html-transform",
    //   transformIndexHtml(html) {
    //     return html.replace(
    //       "</head>",
    //       `<link rel="preload" href="/src/main.js" as="script">\n</head>`
    //     );
    //   },
    // },
  ],
});
