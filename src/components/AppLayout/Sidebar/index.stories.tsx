import React from 'react'

import Sidebar from './index'
import { ListItemType } from 'src/components/List'
import { Icon } from '@gnosis.pm/safe-react-components'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
}

const items: ListItemType[] = [
  {
    label: 'Assets',
    icon: <Icon size="md" type="assets" />,
    href: '#',
  },
  {
    label: 'Settings',
    icon: <Icon size="md" type="settings" />,
    href: '#',
    subItems: [
      {
        label: 'Heimdall Details',
        href: '#',
      },
      {
        label: 'Owners',
        href: '#',
      },
      {
        label: 'Policies',
        href: '#',
      },
      {
        label: 'Advanced',
        href: '#',
      },
    ],
  },
]

export const Base = (): React.ReactElement => (
  <Sidebar
    items={items}
    balance="111"
    safeAddress=""
    safeName="someName"
    granted={true}
    onReceiveClick={console.log}
    onNewTransactionClick={console.log}
    onToggleSafeList={() => console.log}
  />
)
