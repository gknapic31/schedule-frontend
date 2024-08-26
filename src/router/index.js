import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from "@/services";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const publicPages=["/", "/login", "/signup"];
  const loginPage= !publicPages.includes(to.path); 
  const  user = Auth.getUser();
  if(loginPage && !user){
     next('/login');
     return

  }


  next();
})

export default router
