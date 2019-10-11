// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueSplitGrid from 'vue-split-grid';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false;

Vue.use( CKEditor );
Vue.use(VueSplitGrid);
/* eslint-disable no-new */

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

