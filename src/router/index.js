import vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/horror',
    name: 'horror',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Horror.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/action',
    name: 'action',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Action.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/family',
    name: 'family',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Family.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/new',
    name: 'new',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/trending',
    name: 'trendind',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trending.vue'),
    meta: {
      needsUser: true
    }
  },
  {
    path: '/anime',
    name: 'anime',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Anime.vue'),
    meta: {
      needsUser: true
    }
  },
 
  {
    path: '/adminpanel',
    name: 'adminpanel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/adminpanel.vue'),
    meta: {
      needsUser: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}) 

router.beforeEach((to, from, next) => {
  console.log("Stara ruta", from.name, " -> nova ruta -> ", to.name, "korisnik", store.currentUser )
  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser){
    console.error("NE DOPUSTAM")
  }
  else {
    next();
  }


});

export default router
