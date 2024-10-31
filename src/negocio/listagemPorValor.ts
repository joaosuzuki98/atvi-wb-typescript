import Listagem from "./listagem"
import Cliente from "../modelo/cliente"

export default class ListagemPorValor extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let clientesValorTotal = this.clientes.map(cliente => {
            let produtosConsumidos = cliente.getProdutosConsumidos.map(produto => {
                return {
                    nome: produto.nome,
                    preco: produto.preco
                }
            })
            
            let servicosConsumidos = cliente.getServicosConsumidos.map(servico => {
                return {
                    nome: servico.nome,
                    preco: servico.preco
                }
            })

            let valorTotalConsumido = produtosConsumidos.reduce((acc, produto) => acc + produto.preco, 0.0) +
                                  servicosConsumidos.reduce((acc, servico) => acc + servico.preco, 0.0);
    
            return {
                cliente: cliente.nome,
                "Valor total consumido": valorTotalConsumido
            }
        })

        clientesValorTotal.sort((a, b) => b["Valor total consumido"] - a["Valor total consumido"])
        let topClientes = clientesValorTotal.slice(0, 5)

        console.log(`\nLista dos 5 clientes que mais consumiram por valor:`)
        topClientes.forEach((entry) => {
            console.log(`Nome: ` + entry.cliente)
            console.log(`Total consumo: R$${entry["Valor total consumido"]}`)
            console.log(`--------------------------------------`)
        });
        console.log(`\n`)
    }
}
