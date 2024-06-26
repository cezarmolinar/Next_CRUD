import { ElementType } from 'react'
import Link from 'next/link'

export interface MenuItemProps {
  icon: ElementType
  text: string
  URL: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.URL} className="flex gap-2 px-4 py-2 hover:bg-black">
      <props.icon className="text-zinc-200" />
      <span className="text-zinc-200">{props.text}</span>
    </Link>
  )
}
