import Vue from '../../node_modules/vue/dist/vue.';
//import App from './views/layouts/app';
import BalmUI from '../../node_modules/balm-ui/dist/balm-ui.js'; // Mandatory
import BalmUIPlus from '../../node_modules/balm-ui/dist/balm-ui-plus.js'; // Optional
import BalmUINext from '../../node_modules/balm-ui/dist/balm-ui-next.js'; // Experimental

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional
Vue.use(BalmUINext); // Experimental

new Vue({
  el: '#app',
  //components: { App },
  template: '<app/>'
});