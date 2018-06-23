import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Views/Home';
import Portfolio from 'Views/Portfolio';
import Blogs from 'Views/Blogs';

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
		path: '/blogs',
		name: 'Blogs',
		component: Blogs
	}
];

export default new Router({
	root: '/',
	routes
});