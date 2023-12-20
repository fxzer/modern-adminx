export default {
  path: '/auth',
  name: 'auth',
  redirect: '/auth/menu',
  meta: {
    order: 5,
    icon: 'IEpLock',
    title: '账户中心',
    isLink: '',
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true,
  },
  children: [
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '账户信息',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '安全设置',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '告警联系人',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '子用户信息',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '角色管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/auth/menu',
      name: 'authMenu',
      component: '/auth/menu/index',
      meta: {
        icon: 'IEpMenu',
        title: '分销客户',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
  ],
}
