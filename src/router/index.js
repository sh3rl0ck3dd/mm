import Vue from 'vue'
import Router from 'vue-router'
import landingpage from '../components/landingpage'
import blogs from '../components/blogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: landingpage
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogs
    }

  ]
})
