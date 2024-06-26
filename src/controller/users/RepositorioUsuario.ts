import { UserModel } from '@/model/Usuario'
import { PrismaClient } from '@prisma/client'

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient()

  static async salvar(usuario: UserModel): Promise<UserModel> {
    console.log('Dados:', usuario)
    return await this.db.user.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario
    })
  }

  static async obterTodos(): Promise<UserModel[]> {
    return await this.db.user.findMany()
  }

  static async obterPorId(id: string): Promise<UserModel> {
    const usr = await this.db.user.findUnique({ where: { id } })
    return usr as UserModel
  }

  static async excluir(id: string): Promise<void> {
    await this.db.user.delete({ where: { id } })
  }
}
