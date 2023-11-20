import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from './router';

const app = createApp(App);
app.use(router).mount("#app");