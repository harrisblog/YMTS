import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Element-UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 样式代码
import "./style/index.css";

// @vueuse/motion 过渡动画
import { MotionPlugin } from "@vueuse/motion";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: zhCn, size: "large" })
  .use(MotionPlugin)
  .mount("#app");