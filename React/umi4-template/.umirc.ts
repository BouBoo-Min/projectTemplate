// 参考文挡：https://umijs.org/docs/api/config
import { defineConfig } from "umi";
// 使用postcss-px-to-viewport-8-plugin或者postcss-pxtorem
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";
import { proxy, routes } from "./config";

export default defineConfig({
  // 插件配置参考: https://umijs.org/docs/guides/use-plugins
  plugins: [
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/request",
    // "@umijs/plugins/dist/styled-components",
  ],
  // styledComponents: {},
  hash: true,
  history: {
    type: "hash",
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputPath: "dist",
  title: "",
  targets: {
    chrome: 80,
  },
  metas: [
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover",
    },
  ],
  routes,
  npmClient: "pnpm",
  extraPostCSSPlugins: [
    postcsspxtoviewport8plugin({
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 750, // 视窗的宽度，可根据自己的需求调整（这里是以PC端为例）
      // viewportHeight: 667, // 视窗的高度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    }),
  ],
  clientLoader: {}, //加快路由数据加载
  alias: {},
  initialState: {},
  model: {},
  request: {},
  historyWithQuery: {},
  proxy,
  // 配置全局变量文件
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "@/styles/variables.less";',
    },
  },
  favicons: ["https://static.leke.cn/images/common/favicon.ico"],
  links: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://static.leke.cn/styles/common/iconfont/iconfont.css",
    },
  ],
  scripts: [
    {
      defer: true,
      src: "https://static.leke.cn/styles/common/iconfont/iconfont.js",
    },
  ],
});
