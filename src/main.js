import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import ContactMe from './views/ContactMe'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Dev Edz',
      metaTags: [
        {
          name: 'description',
          content: 'Home page for Dev Edz Projects Web Site'
        },
      ]
    }
  },
  {
    path: '/projects',
    component: Projects,
    meta: {
      title: 'Dev Edz - Projects',
      metaTags: [
        {
          name: 'description',
          content: 'Projects page for Dev Edz Projects Web Site'
        },
      ]
    },
  },
  {
    path: '/aboutme',
    component: About,
    meta: {
      title: 'Dev Edz - About Me',
      metaTags: [
        {
          name: 'description',
          content: 'About Me page for Dev Edz Projects Web Site'
        },
      ]
    },
  },
  {
    path: '/contactme',
    component: ContactMe,
    meta: {
      title: 'Dev Edz - Contact Me',
      metaTags: [
        {
          name: 'description',
          content: 'Contact Me page for Dev Edz Projects Web Site'
        },
      ]
    },
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
