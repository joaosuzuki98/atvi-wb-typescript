import Entrada from "../io/entrada"
import Cadastro from "./cadastro"
import Cliente from "../modelo/cliente"
import Empresa from "../modelo/empresa"

export default class CadastroConsumo extends Cadastro {
    private cliente: Cliente
    private entrada: Entrada
    private empresa: Empresa

    constructor(cliente: Cliente, empresa: Empresa) {
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
        this.empresa = empresa
    }

    public cadastrar(): void {
        console.log(`\nRegistro de consumo para o cliente ${this.cliente.nome}`);

        let tipoConsumo = this.entrada.receberTexto(`Digite [1] para produto ou [2] para serviço: `)

        if (tipoConsumo === "1") {
            let produtoNome = this.entrada.receberTexto(`Informe o nome do produto: `)
            let produto = this.empresa.getProdutos.find(produto => produto.nome === produtoNome)

            if (produto) {
                this.cliente.getProdutosConsumidos.push(produto)
                console.log(`Produto registrado com sucesso!\n`)
            } else {
                console.log(`Produto não encontrado.\n`)
            }
        } else if (tipoConsumo === "2") {
            let servicoNome = this.entrada.receberTexto(`Informe o nome do serviço: `)
            let servico = this.empresa.getServicos.find(servico => servico.nome === servicoNome)

            if (servico) {
                this.cliente.getServicosConsumidos.push(servico)
                console.log(`Serviço registrado com sucesso!\n`)
            } else {
                console.log(`Serviço não encontrado.\n`)
            }
        } else {
            console.log(`Tipo de consumo inválido.\n`)
        }
    }
}