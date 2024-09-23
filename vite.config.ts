import { defineConfig, loadEnv, type PluginOption } from 'vite'
// PluginOption: Kiểu cho các plugin trong Vite.
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { visualizer } from "rollup-plugin-visualizer";

// rollup-plugin-visualizer: Plugin để trực quan hóa kích thước bundle.

// https://vitejs.dev/config/
// https://v2.vitejs.dev/config/#environment-variables
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // visualizer(): Để tạo biểu đồ hiển thị kích thước bundle.
    plugins: [react(), visualizer() as PluginOption],  
    server: {
      port: parseInt(env.PORT)
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        components: `${path.resolve(__dirname, "./src/components/")}`,
        styles: `${path.resolve(__dirname, "./src/styles/")}`,
      },
    },
  }
})
