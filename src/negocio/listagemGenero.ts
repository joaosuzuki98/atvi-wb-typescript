import Listagem from "./listagem"
import Cliente from "../modelo/cliente"

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        const clientesMasculinos = this.clientes.filter(cliente => cliente.genero === 'masculino')
        const clientesFemininos = this.clientes.filter(cliente => cliente.genero === 'feminino')
        const clientesOutros = this.clientes.filter(cliente => cliente.genero === 'outros')

        console.log(`\nLista de todos os clientes por gênero:`)
        console.log(`\nMasculino (${clientesMasculinos.length}):`)
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`--------------------------------------`)
        })

        console.log(`\nFeminino (${clientesFemininos.length}):`)
        clientesFemininos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`--------------------------------------`)
        })

        console.log(`\nOutros (${clientesOutros.length}):`)
        clientesOutros.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`--------------------------------------`)
        })
        console.log(`\n`)
    }
}