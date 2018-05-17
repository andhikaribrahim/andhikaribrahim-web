import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Views/Home';
import Portfolio from 'Views/Portfolio';
import Articles from 'Views/Articles';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio
	},
	{
		path: '/Articles',
		name: 'Articles',
		component: Articles
	}
];

export default new Router({
	root: '/',
	routes
});