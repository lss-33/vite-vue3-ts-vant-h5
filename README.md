# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

### commitizen + husky + commitlint

### 目录
33-vite -- 主目录  
├── public -- 静态资源  
├ ├── favicon.ico -- 图标    
├── src -- 源码目录  
├ ├── api -- 后端交互的接口  
├ ├── assets -- 静态资源目录
├ ├ ├── css
├ ├ ├── index.scss -- 全局通用样式
├ ├ ├── mixin.scss -- 全局 mixin
├ ├ └── variables.scss -- 全局变量  
├ ├── components -- 公共的组件   
├ ├── hooks -- vue3 Hooks 
├ ├── plugins -- 插件  
├ ├── route -- VUE 路由  
├ ├ ├── index -- 路由入口  
├ ├ └── router.config.js -- 路由表   
├ ├── utils -- 工具包  
├ ├ ├── request.js -- axios 封装
├ ├ └── storage.js -- 本地存储封装
├ ├── views -- 业务上的 vue 页面  
├ ├ ├── layouts -- 路由布局页面(是否缓存页面)
├ ├ ├── tabBar -- 底部菜单页面
├ ├ └── orther -- 其他页面
├ ├── App.vue -- 根组件  
├ ├── main.ts -- 入口 ts  
├── .gitignore -- git 忽略  
├── index.html -- 首页  
├── tsconfig.json -- 
├── package.json -- 依赖管理  
└── vite.config.js -- vite配置文件
