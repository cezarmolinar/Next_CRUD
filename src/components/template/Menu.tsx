import { IconHexagonNumber0, IconHome, IconUser } from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <aside className="w-64 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem icon={IconHome} text="Inicio" URL="/" />
        <MenuItem icon={IconUser} text="Cadastro de usuário" URL="/user" />
        <MenuItem icon={IconHexagonNumber0} text="outro recurso" URL="/" />
      </nav>
    </aside>
  )
}
