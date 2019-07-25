import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/field/:fieldId',
      name: 'field',
      component: () => import(/* webpackChunkName: "field" */ './views/Field.vue'),
      props: true,
      children: [
        {
          path: 'operation/:operationId',
          name: 'operation',
          component: () => import(/* webpackChunkName: "operation" */ './components/Operation.vue'),
          props: true,
        },
        {
          path: 'new',
          name: 'new-operation',
          component: () => import(/* webpackChunkName: "operation" */ './components/Operation.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
