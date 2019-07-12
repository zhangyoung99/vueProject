import Vue from "vue";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from "./components/Authorized";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
