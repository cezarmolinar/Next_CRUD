'use server'

import RepositorioUsuario from './RepositorioUsuario'

export default async function obterTodosUsuarios() {
  return RepositorioUsuario.obterTodos()
}
