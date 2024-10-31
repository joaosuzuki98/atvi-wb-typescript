import Deleta from "./deleta"
import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class DeletaProduto extends Deleta {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar serviço:`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)

        const indice = this.produtos.findIndex(produto => produto.nome === nome)

        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log(`Produto ${nome} foi removido com sucesso.`);
        } else {
            console.log(`Produto ${nome} não encontrado.`);
        }
    }
}