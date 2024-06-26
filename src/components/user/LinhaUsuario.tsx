import { UserModel } from '@/model/Usuario'
import { IconUser } from '@tabler/icons-react'
// import Image from 'next/image'

export interface LinhaUserProps {
  usuario: UserModel
  onClick?: (usuario: UserModel) => void
}

export default function LinhaUsuario(props: LinhaUserProps) {
  return (
    <div
      className="flex bg-zinc-900 p-3 rounded-md items-center gap-2 cursor-pointer"
      onClick={() => props.onClick?.(props.usuario)}
    >
      <IconUser />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.usuario.name}</span>
        <span>{props.usuario.email}</span>
      </div>
    </div>
  )
}
