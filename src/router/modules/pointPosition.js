import Layout from '@/layout'
export default  {
    path: '/pointPosition',
    component: Layout,
    redirect: '/pointPosition/region',
    name: 'pointPosition',
    meta: { title: '点位管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'region',
        name: 'region',
        component: () => import('@/views/pointPosition/region/index'),
        meta: { title: '区域管理'}
      },
      {
        path: 'pointPosition',
        name: 'pointPosition',
        component: () => import('@/views/pointPosition/pointPosition/index'),
        meta: { title: '运维点位'}
      },
            {
        path: 'cooperation',
        name: 'cooperation',
        component: () => import('@/views/pointPosition/cooperation/index'),
        meta: { title: '合作商管理'}
      }
    ]
  }