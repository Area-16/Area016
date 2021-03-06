import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/Index')
const About = () => import('@/components/About')
const Contact = () => import('@/components/Contact')
const News = () => import('@/components/News')

// import Index from '@/components/Index'
// import About from '@/components/About'
// import Contact from '@/components/Contact'
// import News from '@/components/News'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/info',
      name: 'Findus',
      component: Contact
    }
  ]
})
