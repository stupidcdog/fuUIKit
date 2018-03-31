import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import Normal from '@/views/normal'
import Common from '@/views/common'
import FormComponents from '@/views/formComponents'
import SelectTag from '@/views/formComponents_selecttag'
import Table from '@/views/table'
import Tabs from '@/views/tabs'
import Box from '@/views/box'
import Animation from'@/views/animation'
import Modal from '@/views/modal'
import LayoutGrid from '@/views/layout_grid'

import FI_DRIP from '@/views/FI_DRIP'
import FI_NORMAL from '@/views/FI_NORMAL'
import FI_AWESOME from '@/views/FI_AWESOME'

Vue.use(Router)

export default new Router({
  base:'/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Modal
    },
    {
      path: '/normal',
      name: 'Normal',
      component: Normal
    },
    {
      path: '/common',
      name: 'Common',
      component: Common
    },
    {
      path: '/layout/grid',
      name: 'Layout',
      component: LayoutGrid
    },
    {
      path: '/components',
      name: 'FormComponents',
      component: FormComponents
    },
    {
      path: '/components/selecttag',
      name: 'FormComponents',
      component: SelectTag
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/FI/normal',
      name: 'FI',
      component: FI_NORMAL
    },
    {
      path: '/FI/drip',
      name: 'FI',
      component: FI_DRIP
    },
    {
      path: '/FI/awesome',
      name: 'FI',
      component: FI_AWESOME
    }
  ]
})
