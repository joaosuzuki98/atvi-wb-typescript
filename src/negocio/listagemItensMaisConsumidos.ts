import Listagem from "./listagem"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class ListagemItensMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let produtosConsumidos: Array<Produto> = []
        let servicosConsumidos: Array<Servico> = []
        this.clientes.forEach(cliente => {
            produtosConsumidos.push(...cliente.getProdutosConsumidos)
            servicosConsumidos.push(...cliente.getServicosConsumidos)
        })

        const contagemProdutos: { [key: string]: number } = {}
        produtosConsumidos.forEach(produto => {
          contagemProdutos[produto.nome] = (contagemProdutos[produto.nome] || 0) + 1
        })

        const contagemServicos: { [key: string]: number } = {}
        servicosConsumidos.forEach(servico => {
          contagemServicos[servico.nome] = (contagemServicos[servico.nome] || 0) + 1
        })

        const produtosOrdenados = Object.entries(contagemProdutos).sort((a, b) => b[1] - a[1])
        const servicosOrdenados = Object.entries(contagemServicos).sort((a, b) => b[1] - a[1])

        console.log(`\nLista de todos os produtos por consumo:`)
        for (const [nome, quantidade] of produtosOrdenados) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }            

        console.log(`\nLista de todos os serviços por consumo:`)
        for (const [nome, quantidade] of servicosOrdenados) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }            

        console.log(`\n`)
    }
}