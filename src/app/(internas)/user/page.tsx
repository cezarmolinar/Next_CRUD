'use client'

import Controller from '@/controller'
import Pagina from '@/components/template/Pagina'
import Titulo from '@/components/template/Titulo'
import FormularioUsuario from '@/components/user/FormularioUsuario'
import ListaUsuario from '@/components/user/ListaUser'
import { UserModel } from '@/model/Usuario'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function Page() {
  const [usuarios, setUsuarios] = useState<UserModel[]>([])
  const [userState, setUserState] = useState<Partial<UserModel> | null>(null)

  useEffect(() => {
    Controller.usuarios.obter().then(setUsuarios)
  }, [])

  async function salvar() {
    if (!userState) return

    await Controller.usuarios.salvar(userState)
    const usuarios = await Controller.usuarios.obter()
    setUsuarios(usuarios)
    setUserState(null)
  }

  async function excluir() {
    if (!userState || !userState.id) return

    await Controller.usuarios.excluir(userState.id!)
    const usuarios = await Controller.usuarios.obter()
    setUsuarios(usuarios)
    setUserState(null)
  }

  return (
    <Pagina>
      <Titulo
        icone={IconUser}
        principal="Usuários"
        secundario="Cadastro de usuários"
      />

      {userState ? (
        <FormularioUsuario
          user={userState}
          onChange={setUserState}
          salvar={salvar}
          cancelar={() => setUserState(null)}
          excluir={excluir}
        />
      ) : (
        <>
          <div className="flex justify-end pb-4">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => setUserState({})}
            >
              <IconPlus />
              Novo
            </button>
          </div>

          <ListaUsuario usuarios={usuarios} onClick={setUserState} />
        </>
      )}
    </Pagina>
  )
}
