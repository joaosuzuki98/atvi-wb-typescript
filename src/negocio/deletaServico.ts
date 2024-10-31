import Deleta from "./deleta"
import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar serviço:`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)

        const indice = this.servicos.findIndex(servico => servico.nome === nome)

        if (indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log(`Serviço ${nome} foi removido com sucesso.`);
        } else {
            console.log(`Serviço ${nome} não encontrado.`);
        }
    }
}