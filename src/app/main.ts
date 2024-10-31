import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente"
import CadastroServiço from "../negocio/cadastroServiço"
import ListagemClientes from "../negocio/listagemClientes"
import ListagemServicos from "../negocio/listagemServiços"
import CadastroProduto from "../negocio/cadastroProduto"
import ListagemProdutos from "../negocio/listagemProduto"
import CadastroConsumo from "../negocio/cadastroConsumo"
import ListagemPorConsumo from "../negocio/listagemPorConsumo"
import ListagemGenero from "../negocio/listagemGenero"
import ListagemItensMaisConsumidos from "../negocio/listagemItensMaisConsumidos"
import ListagemItensPorGenero from "../negocio/listagemItensPorGenero"
import ListagemPorConsumoMenor from "../negocio/listagemPorConsumoMenor"
import ListagemPorValor from "../negocio/listagemPorValor"
import DeletaCliente from "../negocio/deletaCliente"
import DeletaProduto from "../negocio/deleteProduto"
import DeletaServico from "../negocio/deletaServico"
import EditaCliente from "../negocio/editaCliente"
import EditaServico from "../negocio/editaServico"
import EditaProduto from "../negocio/editaProduto"

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`)
    console.log(`1 - Clientes`)
    console.log(`2 - Serviços`)
    console.log(`3 - Produtos`)
    console.log(`4 - Estatísticas`)
    console.log(`5 - Cadastrar consumo`)
    console.log(`0 - Sair`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log(`O que gostaria de fazer com clientes?`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Listar`)
            console.log(`3 - Editar`)
            console.log(`4 - Deletar`)
            console.log(`0 - Sair`)
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break
                case 3:
                    let editaCliente = new EditaCliente(empresa.getClientes)
                    editaCliente.editar()
                    break
                case 4:
                    let deletaCliente = new DeletaCliente(empresa.getClientes)
                    deletaCliente.deletar()
                    break
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break
                default:
                    console.log(`Operação não entendida :(`)
            }
            break
        case 2:
            console.log(`\nO que gostaria de fazer com serviços?`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Listar`)
            console.log(`3 - Editar`)
            console.log(`4 - Deletar`)
            console.log(`0 - Sair`)
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroServico = new CadastroServiço(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break
                case 2:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break
                case 3:
                    let editaServico = new EditaServico(empresa.getServicos)
                    editaServico.editar()
                    break
                case 4:
                    let deletaServico = new DeletaServico(empresa.getServicos)
                    deletaServico.deletar()
                    break
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break
                default:
                    console.log(`Operação não entendida :(`)
            }     
            break       
        case 3:
            console.log(`\nO que gostaria de fazer com produtos?`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Listar`)
            console.log(`3 - Editar`)
            console.log(`4 - Deletar`)
            console.log(`0 - Sair`)
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break
                case 2:
                    let listagemProduto = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto.listar()
                    break
                case 3:
                    let editaProduto = new EditaProduto(empresa.getProdutos)
                    editaProduto.editar()
                    break
                case 4:
                    let deletaProduto = new DeletaProduto(empresa.getProdutos)
                    deletaProduto.deletar()
                    break
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break
                default:
                    console.log(`Operação não entendida :(`)
            }   
            break
        case 4:
            console.log(`\nO que gostaria de fazer com análises?`)
            console.log(`1 - Listar os 10 clientes que mais consumiram`)
            console.log(`2 - Listar clientes por gênero`)
            console.log(`3 - Listar serviços e produtos mais consumidos`)
            console.log(`4 - Listar serviços e produtos mais consumidos por gênero`)
            console.log(`5 - Listar os 10 clientes que menos consumiram`)
            console.log(`6 - Listar os 5 clientes que mais consumiram por valor`)
            console.log(`0 - Sair`)
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let listagemClientesQueMaisConsumiram = new ListagemPorConsumo(empresa.getClientes)
                    listagemClientesQueMaisConsumiram.listar()
                    break
                case 2:
                    let listagemGenero = new ListagemGenero(empresa.getClientes)
                    listagemGenero.listar()
                    break
                case 3:
                    let listagemItensMaisConsumidos = new ListagemItensMaisConsumidos(empresa.getClientes)
                    listagemItensMaisConsumidos.listar()
                    break
                case 4:
                    let listagemItensPorGenero = new ListagemItensPorGenero(empresa.getClientes)
                    listagemItensPorGenero.listar()
                    break
                case 5:
                    let listagemClientesQueMenosConsumiram = new ListagemPorConsumoMenor(empresa.getClientes)
                    listagemClientesQueMenosConsumiram.listar()
                    break        
                case 6:
                    let listagemPorValor = new ListagemPorValor(empresa.getClientes)
                    listagemPorValor.listar()
                    break        
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break
                default:
                    console.log(`Operação não entendida :(`)
            }
            break
        case 5:
            let cpfCliente = entrada.receberTexto(`Digite o cpf do cliente: `)
            let cliente = empresa.getClientes.find(c => c.getCpf.getValor === cpfCliente)

            if(cliente) {
                let cadastroConsumo = new CadastroConsumo(cliente, empresa)
                cadastroConsumo.cadastrar()
            } else {
                console.log(`Cliente não encontrado.\n`)
            }
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break
        default:
            console.log(`Operação não entendida :(`)
    }
}