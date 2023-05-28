import { createRouter, createWebHistory } from 'vue-router';
import Editor from '@/components/EditorThreads.vue';
import Viewer from '@/components/ViewerThreads.vue';
import registration from './components/registrationStr.vue';
import login from './components/loginStr.vue';
import logAuth from './components/mainStr';

const routes = [
  { path: '/', component: logAuth,},
  { path: '/EditorThreads', component: Editor,},
  { path: '/ViewerThreads/:id', component: Viewer },
  { path: '/register', component: registration, },
  { path: '/login', component: login,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;