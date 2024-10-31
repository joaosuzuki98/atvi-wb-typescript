import Listagem from "./listagem"
import Cliente from "../modelo/cliente"

export default class ListagemPorConsumo extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let clientesConsumoTotal = this.clientes.map(cliente => {
            let totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            return {
                cliente: cliente,
                totalConsumido: totalConsumido
            }
        })

        clientesConsumoTotal.sort((a, b) => b.totalConsumido - a.totalConsumido)
        let topClientes = clientesConsumoTotal.slice(0, 10)

        console.log(`\nLista dos 10 clientes que mais consumiram:`)
        topClientes.forEach((entry) => {
            console.log(`Nome: ` + entry.cliente.nome)
            console.log(`Nome social: ` + entry.cliente.nomeSocial)
            console.log(`Gênero: ` + entry.cliente.genero)
            console.log(`CPF: ` + entry.cliente.getCpf.getValor)
            console.log(`Produtos consumidos: ${entry.cliente.getProdutosConsumidos.length}`)
            console.log(`Serviços consumidos: ${entry.cliente.getServicosConsumidos.length}`)
            console.log(`Total consumo: ${entry.cliente.getServicosConsumidos.length + entry.cliente.getProdutosConsumidos.length}`)
            console.log(`--------------------------------------`)
        });
        console.log(`\n`)
    }
}
