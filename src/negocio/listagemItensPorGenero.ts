import Listagem from "./listagem"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class ListagemItensPorGenero extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let produtosConsumidosMasculino: Array<Produto> = []
        let produtosConsumidosFeminino: Array<Produto> = []
        let produtosConsumidosOutro: Array<Produto> = []
        let servicosConsumidosMasculino: Array<Servico> = []
        let servicosConsumidosFeminino: Array<Servico> = []
        let servicosConsumidosOutro: Array<Servico> = []
        this.clientes.forEach(cliente => {
            switch (cliente.genero) {
                case 'masculino':
                    produtosConsumidosMasculino.push(...cliente.getProdutosConsumidos)
                    servicosConsumidosMasculino.push(...cliente.getServicosConsumidos)
                    break
                case 'feminino':
                    produtosConsumidosFeminino.push(...cliente.getProdutosConsumidos)
                    servicosConsumidosFeminino.push(...cliente.getServicosConsumidos)
                    break
                default:
                    produtosConsumidosOutro.push(...cliente.getProdutosConsumidos)
                    servicosConsumidosOutro.push(...cliente.getServicosConsumidos)
            }
        })

        const contagemProdutosMasculino: { [key: string]: number } = {}
        produtosConsumidosMasculino.forEach(produto => {
          contagemProdutosMasculino[produto.nome] = (contagemProdutosMasculino[produto.nome] || 0) + 1
        })

        const contagemProdutosFeminino: { [key: string]: number } = {}
        produtosConsumidosFeminino.forEach(produto => {
          contagemProdutosFeminino[produto.nome] = (contagemProdutosFeminino[produto.nome] || 0) + 1
        })

        const contagemProdutosOutro: { [key: string]: number } = {}
        produtosConsumidosOutro.forEach(produto => {
          contagemProdutosOutro[produto.nome] = (contagemProdutosOutro[produto.nome] || 0) + 1
        })

        const contagemServicosMasculino: { [key: string]: number } = {}
        servicosConsumidosMasculino.forEach(servico => {
          contagemServicosMasculino[servico.nome] = (contagemServicosMasculino[servico.nome] || 0) + 1
        })

        const contagemServicosFeminino: { [key: string]: number } = {}
        servicosConsumidosFeminino.forEach(servico => {
          contagemServicosFeminino[servico.nome] = (contagemServicosFeminino[servico.nome] || 0) + 1
        })

        const contagemServicosOutro: { [key: string]: number } = {}
        servicosConsumidosOutro.forEach(servico => {
          contagemServicosOutro[servico.nome] = (contagemServicosOutro[servico.nome] || 0) + 1
        })

        const produtosOrdenadosMasculino = Object.entries(contagemProdutosMasculino).sort((a, b) => b[1] - a[1])
        const produtosOrdenadosFemino = Object.entries(contagemProdutosFeminino).sort((a, b) => b[1] - a[1])
        const produtosOrdenadosOutro = Object.entries(contagemProdutosOutro).sort((a, b) => b[1] - a[1])
        const servicosOrdenadosMasculino = Object.entries(contagemServicosMasculino).sort((a, b) => b[1] - a[1])
        const servicosOrdenadosFeminino = Object.entries(contagemServicosFeminino).sort((a, b) => b[1] - a[1])
        const servicosOrdenadosOutro = Object.entries(contagemServicosOutro).sort((a, b) => b[1] - a[1])

        console.log(`\nLista de todos os produtos consumidos por gênero:`)
        console.log(`\nConsumo dos produtos pelo gênero masculino:`)
        for (const [nome, quantidade] of produtosOrdenadosMasculino) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }            

        console.log(`\nConsumo dos produtos pelo gênero feminino:`)
        for (const [nome, quantidade] of produtosOrdenadosFemino) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }            

        console.log(`\nConsumo dos produtos pelo gênero outros:`)
        for (const [nome, quantidade] of produtosOrdenadosOutro) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }                    

        console.log(`\nLista de todos os serviços por consumo:`)
        console.log(`\nConsumo dos serviços pelo gênero masculino:`)
        for (const [nome, quantidade] of servicosOrdenadosMasculino) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }       

        console.log(`\nConsumo dos serviços pelo gênero feminino:`)
        for (const [nome, quantidade] of servicosOrdenadosFeminino) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }      

        console.log(`\nConsumo dos serviços pelo gênero outros:`)
        for (const [nome, quantidade] of servicosOrdenadosOutro) {
            console.log(`${nome}: ${quantidade}`)
            console.log(`--------------------------------------`)        
        }            

        console.log(`\n`)
    }
}