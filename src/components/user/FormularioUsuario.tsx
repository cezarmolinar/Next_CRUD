import { UserModel } from '@/model/Usuario'
import InputTexto from '../InputTexto'

export interface FormularioUsuarioProps {
  user: Partial<UserModel>
  onChange: (user: Partial<UserModel>) => void
  salvar: () => void
  cancelar: () => void
  excluir: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputTexto
        label="Nome"
        type="text"
        value={props.user.name ?? ''}
        id="nome"
        name="nome"
        onChange={(e) =>
          props.onChange?.({ ...props.user, name: e.target.value })
        }
      />
      <InputTexto
        label="Email"
        type="email"
        value={props.user.email ?? ''}
        id="email"
        name="email"
        onChange={(e) =>
          props.onChange?.({ ...props.user, email: e.target.value })
        }
      />
      <InputTexto
        label="Senha"
        type="password"
        value={props.user.password ?? ''}
        id="password"
        name="password"
        onChange={(e) =>
          props.onChange?.({ ...props.user, password: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={props.salvar}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 rounded-md"
            onClick={props.cancelar}
          >
            Cancelar
          </button>
        </div>

        <button
          className="bg-red-500 px-4 py-2 rounded-md"
          onClick={props.excluir}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}
