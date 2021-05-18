import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: '首页',
  //   hidden: true,
  //   meta: {
  //     title: '展会管理',
  //     icon: 'nested'
  //   },
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index')
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'el-icon-s-home', noCache: true }
      }
    ]
  },

  {
    path: '/exhibition',
    component: Layout,
    redirect: '/exhibition/exhibitionInfo/list',
    name: '展会管理',
    meta: {
      title: '展会管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'exhibitionInfo',
        component: () => import('@/views/exhibition/index'), // Parent router-view
        name: '展会信息管理',
        meta: { title: '展会信息管理', icon: 'table' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/exhibition/exhibitionInfo/list'),
            name: '展会信息列表',
            meta: { title: '展会信息列表', icon: 'table' }
          },
          {
            path: 'add',
            component: () => import('@/views/exhibition/exhibitionInfo/add'),
            name: '展会信息添加',
            hidden: true,
            meta: { title: '添加', icon: 'tree' }
          },
          {
            path: 'edit/:id',
            name: '展会信息修改',
            component: () => import('@/views/exhibition/exhibitionInfo/add'),
            meta: { title: '编辑', noCache: true },
            hidden: true
          }
        ]
      },
      {
        path: 'inviteInfo',
        component: () => import('@/views/exhibition/index'), // Parent router-view
        name: '邀请函管理',
        meta: { title: '邀请函管理', icon: 'table' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/exhibition/inviteInfo/list'),
            name: '邀请函信息列表',
            meta: { title: '邀请函信息列表', icon: 'table' }
          },
          {
            path: 'add',
            component: () => import('@/views/exhibition/inviteInfo/add'),
            name: '邀请函信息添加',
            hidden: true,
            meta: { title: '添加', icon: 'tree' }
          },
          {
            path: 'edit/:id',
            name: '邀请函信息修改',
            component: () => import('@/views/exhibition/inviteInfo/add'),
            meta: { title: '编辑', noCache: true },
            hidden: true
          }
        ]
      },
      {
        path: 'meetInfo',
        component: () => import('@/views/exhibition/index'), // Parent router-view
        name: '会议管理',
        meta: { title: '展会信息管理', icon: 'table' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/exhibition/exhibitionInfo/list'),
            name: '展会信息列表',
            meta: { title: '列表', icon: 'table' }
          },
          {
            path: 'add',
            component: () => import('@/views/exhibition/exhibitionInfo/add'),
            name: '展会信息添加',
            meta: { title: '添加', icon: 'tree' }
          },
          {
            path: 'edit/:id',
            name: '展会信息修改',
            component: () => import('@/views/exhibition/exhibitionInfo/add'),
            meta: { title: '编辑', noCache: true },
            hidden: true
          }
        ]
      }

    ]
    // children: [
    //   {
    //     path: 'list',
    //     name: '展会信息查看',
    //     component: () => import('@/views/tree/index'),
    //     meta: { title: '展会信息管理', icon: 'table' }
    //   },
    //   {
    //     path: 'add',
    //     name: '展会信息添加',
    //     component: () => import('@/views/tree/index'),
    //     meta: { title: '展会信息添加', icon: 'table' }
    //   },
    //   {
    //     path: 'menu2',
    //     component: () => import('@/views/tree/index'),
    //     meta: { title: '邀请函管理' }
    //   },
    //   {
    //     path: 'menu3',
    //     component: () => import('@/views/tree/index'),
    //     meta: { title: '会议管理' }
    //   }
    // ]
  },

  {
    path: '/unit',
    component: Layout,
    redirect: '/unit/index',
    name: '展商管理',
    meta: {
      title: '单位管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'unitInfo',
        component: () => import('@/views/unit/index'), // Parent router-view
        name: '单位管理',
        meta: { title: '单位管理', icon: 'table' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/unit/unitInfo/list'),
            name: '单位信息列表',
            meta: { title: '单位信息列表', icon: 'table' }
          },
          {
            path: 'add',
            hidden: true,
            component: () => import('@/views/unit/unitInfo/add'),
            name: '单位信息添加',
            meta: { title: '添加', icon: 'tree' }
          },
          {
            path: 'edit/:id',
            name: '单位信息修改',
            component: () => import('@/views/unit/unitInfo/add'),
            meta: { title: '编辑', noCache: true },
            hidden: true
          }
        ]
      },
      {
        path: 'visitInfo',
        component: () => import('@/views/unit/index'), // Parent router-view
        name: '员工管理',
        meta: { title: '员工管理', icon: 'table' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/unit/visitInfo/list'),
            name: '员工信息列表',
            meta: { title: '员工信息列表', icon: 'table' }
          },
          {
            path: 'add',
            hidden: true,
            component: () => import('@/views/unit/visitInfo/add'),
            name: '员工信息添加',
            meta: { title: '添加', icon: 'tree' }
          },
          {
            path: 'edit/:id',
            name: '员工信息修改',
            component: () => import('@/views/unit/visitInfo/add'),
            meta: { title: '编辑', noCache: true },
            hidden: true
          }
        ]
      }
    ]
  },
  {
    path: '/money',
    component: Layout,
    redirect: '/exhibition/menu1',
    name: '财务管理',
    meta: {
      title: '财务管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/tree/index'),
        meta: { title: '财务支出管理' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/tree/index'),
        meta: { title: '财务收入管理' }
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/exhibition/menu1',
    name: '统计分析',
    meta: {
      title: '统计分析',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/tree/index'),
        meta: { title: '展会统计分析' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/tree/index'),
        meta: { title: '观众反馈统计分析' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/exhibition/menu1',
    name: '用户管理',
    meta: {
      title: '用户管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/tree/index'),
        meta: { title: '前台用户' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/tree/index'),
        meta: { title: '后台管理员用户' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  {
    path: '/dict',
    component: Layout,
    redirect: '/dict/list',
    name: '数据管理',
    alwaysShow: true,
    meta: { title: '数据管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '数据字典',
        component: () => import('@/views/dict/list'),
        meta: { title: '数据字典', icon: 'table' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
