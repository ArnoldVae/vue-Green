import product from './product/module'
export default[
  ...product,
  {
    path : "/demo",
    name : "demo",
    meta : {
      title: 'demo',
      icon: 'el-icon-menu',
    },
    component : () => import ('./demo.vue')
  },
  {
    path : "/demo2",
    name : "demo2",
    meta : {
      title: 'demo2',
      icon: 'el-icon-menu',
    },
    component : () => import ('./demo2.vue')
  },
  {
    path : "/demo3",
    name : "demo3",
    meta : {
      title: 'demo3',
      icon: 'el-icon-menu',
    },
    component : () => import ('./demo3.vue')
  },
  {
    path : "/demo4",
    name : "demo4",
    meta : {
      title: 'demo4',
      icon: 'el-icon-menu',
    },
    component : () => import ('./demo4.vue')
  },
  {
    path : "/demo5",
    name : "demo5",
    meta : {
        title: 'demo5',
        icon: 'el-icon-menu',
    },
    component : () => import ('./demo5.vue')
  },
  {
    path : "/tree",
    name : "tree",
    meta : {
      title: 'tree',
      icon: 'el-icon-menu',
  },
  component : () => import ('./treeTable.vue')
  },
    {
        path : "/demo6",
        name : "demo6",
        meta : {
            title: 'demo6',
            icon: 'el-icon-menu',
        },
        component : () => import ('./demo6.vue')
    },
    {
        path : "/demo7",
        name : "demo7",
        meta : {
            title: 'demo7',
            icon: 'el-icon-menu',
        },
        component : () => import ('./demo7.vue')
    },
    {
        path : "/demo8",
        name : "demo8",
        meta : {
            title: 'demo8',
            icon: 'el-icon-menu',
        },
        component : () => import ('./demo8.vue')
    },
    {
        path : "/PDF",
        name : "PDF",
        meta : {
            title: 'PDF',
            icon: 'el-icon-menu',
        },
        component : () => import ('./PDF.vue')
    },
];
