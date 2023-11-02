import { App } from "vue";
import dragPannelPreview from "./components/custom-component/preview/index.vue";

dragPannelPreview.install = (vue: App) => {
  vue.component(dragPannelPreview.name, dragPannelPreview);
};

export default dragPannelPreview;
