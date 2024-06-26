'use server'

import { UserModel } from '@/model/Usuario'
import Id from '../../../utils/Id'
import RepositorioUsuario from './RepositorioUsuario'

export default async function salvarUsuario(usuario: Partial<UserModel>) {
  const novoUsuario = { ...usuario, id: usuario.id ?? Id.novo }

  return RepositorioUsuario.salvar(novoUsuario as UserModel)
}
