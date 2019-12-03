import Home from '@/views/Home/Home'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City/City')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/Detail/Detail')
  }
]
