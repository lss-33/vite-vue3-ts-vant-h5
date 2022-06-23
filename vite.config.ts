import { defineConfig, loadEnv } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    const env = loadEnv(mode, process.cwd())
    console.log(env,'env')
    return {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "components": path.resolve(__dirname, "src/components"),
                "styles": path.resolve(__dirname, "src/styles"),
                "plugins": path.resolve(__dirname, "src/plugins"),
                "views": path.resolve(__dirname, "src/views"),
                "layouts": path.resolve(__dirname, "src/layouts"),
                "utils": path.resolve(__dirname, "src/utils"),
                "apis": path.resolve(__dirname, "src/apis"),
                "dirs": path.resolve(__dirname, "src/directives"),
            },
        },
        // 构建特定配置
        plugins: [
            vue(),
            Components({
                resolvers: [VantResolver()],
            }),
        ]
        }
    })
