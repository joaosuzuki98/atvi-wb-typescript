import Listagem from "./listagem"
import Servico from "../modelo/servico"

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    // Receba o array de serviços da classe Empresa
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços:`)
        // Itera sobre cada item da lista serviços
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome)
            console.log(`Preço: ` + servico.preco)
            console.log(`--------------------------------------`)
        })
        console.log(`\n`)
    }
}