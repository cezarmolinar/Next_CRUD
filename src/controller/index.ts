import excluirUsuario from './users/excluirUsuario'
import obterTodosUsuarios from './users/obterTodosUsuarios'
import salvarUsuario from './users/salvarUsuario'

export default class Controller {
  static readonly usuarios = {
    salvar: salvarUsuario,
    obter: obterTodosUsuarios,
    excluir: excluirUsuario
  }
}
