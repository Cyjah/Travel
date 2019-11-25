import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City')
  }
]
