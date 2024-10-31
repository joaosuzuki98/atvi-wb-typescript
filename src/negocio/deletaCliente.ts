import Deleta from "./deleta"
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar cliente:`);
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)

        const indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf)

        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            console.log(`Cliente com CPF ${cpf} foi removido com sucesso.`);
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado.`);
        }
    }
}