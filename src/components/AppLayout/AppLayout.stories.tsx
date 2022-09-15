import React from 'react'

import { Icon } from '@gnosis.pm/safe-react-components'
import { ListItemType } from 'src/components/List'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    componentSubtitle: 'It provides a custom layout used in Safe Multisig',
  },
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
        label: 'Safe Details',
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

export const Base = (): React.ReactElement => {
  return (
    <Layout
      sidebarItems={items}
      safeAddress=""
      safeName="someName"
      granted={true}
      balance={undefined}
      onToggleSafeList={() => console.log}
      onReceiveClick={() => console.log}
      onNewTransactionClick={() => console.log}
    >
      <div>The content goes here</div>
    </Layout>
  )
}
