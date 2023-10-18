import { createRouter, createWebHistory } from 'vue-router';


import HomeView from '../views/HomeView.vue';


import resume from '../views/resume.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  
  

  {
    path: '/resume',
    name: 'resume',
    component: resume
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
