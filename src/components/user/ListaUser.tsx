import { UserModel } from '@/model/Usuario'
import LinhaUsuario from './LinhaUsuario'

// const usuarios: UserModel[] = [
//   {
//     id: '1',
//     name: 'cezar',
//     email: 'teste@jujuba.com',
//     password: 'xx'
//   },
//   {
//     id: '2',
//     name: 'ranilom',
//     email: 'ranilom@jujuba.com',
//     password: 'qqqqqqqxx'
//   }
// ]

export interface ListaUsuarioProps {
  usuarios: UserModel[]
  onClick?: (usuario: UserModel) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {props.usuarios.map((user: UserModel, i) => {
          return (
            <LinhaUsuario
              key={user.id}
              usuario={user}
              onClick={props.onClick}
            />
          )
        })}
      </div>
    </>
  )
}
