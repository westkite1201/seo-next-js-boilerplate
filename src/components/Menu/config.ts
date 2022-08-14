import { DropdownMenuItems, DropdownMenuItemType } from './types'
import { ElementType } from 'react'

export type MenuItemsType = {
  label: string
  href: string
  icon?: ElementType<any>
  fillIcon?: ElementType<any>
  items?: DropdownMenuItems[]
  showOnMobile?: boolean
  showItemsOnMobile?: boolean
}

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config = [
  {
    label: 'Test',
    href: '/Test',
    // icon: 'SwapIcon',
    // fillIcon: 'SwapFillIcon',
    showItemsOnMobile: false,
    items: [
      {
        label: 'Grade',
        href: '/grade',
      },
    ],
  },
  {
    label: 'Test2',
    href: '/Test2',
    // icon: 'MoreIcon',
    items: [
      {
        label: 'Test2-1',
        href: '/Test2-1',
      },
      {
        label: 'Test2-2',
        href: '/Test2-2',
      },
    ],
  },
]

export default config
