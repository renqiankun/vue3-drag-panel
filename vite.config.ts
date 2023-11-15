import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let isLib = mode == "lib";
  let buildLib = {
    lib: {
      entry: "./src/lib.ts",
      name: "drag-pannel-preview",
      fileName: "drag-pannel-preview",
    },
    outDir: path.join(__dirname, "lib"),
    rollupOptions: {
      external: ["vue","drag-pannel-preview"],
      output: {
        manualChunks: undefined,
        globals: {
          vue: "Vue",
        },
      },
    },
  };

  let buildOption = {
    // target: 'es2015',//配合 plugin-legacy 支持传统浏览器
    outDir: path.join(__dirname, "dist"),
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    drop: command === "build" ? ["console", "debugger"] : [],
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: {
          "base-module": ["vue"],
          "element-plus": ["element-plus"],
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: "js/[name].[hash].js",
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: "js/[name].[hash].js",
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: "[ext]/[name].[hash].[ext]",
      },
    },
  };
  let endBuild = isLib ? buildLib : buildOption;
  let plugins = [vue(), VueSetupExtend()];
  if (isLib) plugins.push(cssInjectedByJsPlugin());
  return {
    base: "./",
    plugins: plugins,
    resolve: { alias: { "@": path.resolve(__dirname, "src") } },
    build: {
      ...endBuild,
    },
  };
});
