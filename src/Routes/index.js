import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Views/Home';
import Projects from 'Views/Projects';
import Articles from 'Views/Articles';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects
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