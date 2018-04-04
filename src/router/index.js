import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('components/home/home.vue').then((module) => {
    resolve(module)
  })
}

const Platflow = (resolve) => {
  import('components/platflow/patflow.vue').then((module) => {
    resolve(module)
  })
}

const Platgoneng = (resolve) => {
  import('components/platgoneng/platgoneng.vue').then((module) => {
    resolve(module)
  })
}

const Platrecommend = (resolve) => {
  import('components/platrecommend/platrecommend.vue').then((module) => {
    resolve(module)
  })
}

const Platuser = (resolve) => {
  import('components/platuser/platuser.vue').then((module) => {
    resolve(module)
  })
}

const Platyewu = (resolve) => {
  import('components/platyewu/platyewu.vue').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Platuser
    }, {
      path: '/Platflow',
      component: Platflow
    }, {
      path: '/Platgoneng',
      component: Platgoneng
    }, {
      path: '/Platrecommend',
      component: Platrecommend
    }, {
      path: '/Platuser',
      component: Home
    }, {
      path: '/Platyewu',
      component: Platyewu
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {x: 0, y: 0}
  }
})
