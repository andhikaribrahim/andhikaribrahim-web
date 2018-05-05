import Vue from 'vue'
import Router from 'vue-router'

import Home from 'Views/Home'
import Projects from 'Views/Projects'
import Articles from 'Views/Articles'
import About from 'Views/About'

Vue.use(Router)

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
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
]

export default new Router({
	root: '/',
	routes
})