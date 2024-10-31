import Edita from "./edita"
import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class EditarProduto extends Edita {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log(`\nEditar produto:`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produo: `)

        const produto = this.produtos.find(produto => produto.nome === nome)

        if (produto) {
            console.log(`\nInforme os novos dados (ou pressione Enter para manter o valor atual):\n`)
            let novoNome = this.entrada.receberTexto(`Nome atual (${produto.nome}): `)
            if (novoNome) produto.nome = novoNome

            console.log(`Produto ${nome} foi atualizado com sucesso.`);
        } else {
            console.log(`Produto ${nome} não encontrado.`);
        }
    }
}