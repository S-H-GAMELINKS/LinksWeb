import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/web/index.vue'
import About from '../components/web/about.vue'
import Contact from '../components/web/contact.vue'
import Reference from '../components/reference/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/reference', component: Reference }
  ],
})
