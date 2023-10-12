import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";
import './theme/common.scss'

const app  = createApp(App)
app.use(ElementPlus)
app.use(VueDragResizeRotate);
app.mount('#app')
