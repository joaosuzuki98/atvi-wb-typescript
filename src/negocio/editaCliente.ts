import Edita from "./edita"
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class EditaCliente extends Edita {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log(`\nEditar cliente:`);
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)

        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)

        if (cliente) {
            console.log(`\nInforme os novos dados (ou pressione Enter para manter o valor atual):\n`)
            let novoNome = this.entrada.receberTexto(`Nome atual (${cliente.nome}): `)
            if (novoNome) cliente.nome = novoNome

            let novoNomeSocial = this.entrada.receberTexto(`Nome social atual (${cliente.nomeSocial}): `)
            if (novoNomeSocial) cliente.nomeSocial = novoNomeSocial

            let novoGenero = this.entrada.receberTexto(`Gênero atual (${cliente.genero}): `)
            if (novoGenero) cliente.genero = novoGenero

            console.log(`Cliente com CPF ${cpf} foi atualizado com sucesso.`);
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado.`);
        }
    }
}