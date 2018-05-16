import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
// Components
import App from './App';
import router from './Routes';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './Stylus/main.styl';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const app = new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});