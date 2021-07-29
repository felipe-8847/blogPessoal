import { Postagem } from "./Postagem"

export class User {
    public idUsuario: number
    public nome: string
    public usuario: string
    public senha: string
    public urlFoto: string
    public tipo: string
    public postagem: Postagem[]
}