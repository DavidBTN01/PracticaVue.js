import { createRouter, createWebHistory } from 'vue-router';
import InventoryView from '@/views/InventoryView.vue';
import TablaView from '@/views/TablaView.vue';
import Home from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ToDoListView from '../views/ToDoListView.vue';
import ShoppingView from '../views/ShoppingView.vue';

const routes = [
  {
    path: '/',
    name: 'Home_View',
    component: Home,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: InventoryView,
  },
  {
    path: '/Reactive',
    name: 'Reactive',
    component: TablaView,
  },
  {
    path: '/list',
    name: 'DoList',
    component: ToDoListView,
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: ShoppingView,
  },
  {
    path: '/about',
    name: 'About_View',
    component: AboutPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // O usa createWebHashHistory() si no estás usando un servidor
  routes,
});

export default router;
