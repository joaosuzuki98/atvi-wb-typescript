import Servico from "../modelo/servico"
import Entrada from "../io/entrada"
import Cadastro from "./cadastro"

export default class CadastroServiço extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    // Recebe o array de serviços da classe Empresa
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`)

        let nome: string = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let preco: number = this.entrada.receberNumero(`\nPor favor, informe o preço do serviço: `)

        let servico = new Servico()

        servico.nome = nome
        servico.preco = preco

        // Criamos uma nova entrada no array de serviços com um objeto Servico que acabamos de criar em cima
        this.servicos.push(servico)

        console.log(`\n Serviço cadatrado com sucesso :3`)
    }
}