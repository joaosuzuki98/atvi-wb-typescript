import Edita from "./edita"
import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class EditaServico extends Edita {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log(`\nEditar serviço:`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)

        const servico = this.servicos.find(servico => servico.nome === nome)

        if (servico) {
            console.log(`\nInforme os novos dados (ou pressione Enter para manter o valor atual):\n`)
            let novoNome = this.entrada.receberTexto(`Nome atual (${servico.nome}): `)
            if (novoNome) servico.nome = novoNome

            console.log(`Serviço ${nome} foi atualizado com sucesso.`);
        } else {
            console.log(`Serviço ${nome} não encontrado.`);
        }
    }
}