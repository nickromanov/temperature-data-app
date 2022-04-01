import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/editing',
		name: 'edit',
		component: () => import('../views/EditView.vue')
	}
];

export default createRouter({
	history: createWebHashHistory(),
	routes
});