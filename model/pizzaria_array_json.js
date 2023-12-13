/**********************************************************************
 * Objetivo: Informações sobre uma determinada pizzaria.
 * Data: 04/12/2023.
 * Autor: Carolina Neponucena Costa.
 * Versao: 1.0
 **********************************************************************/
var tony_pizzaria = require('./tony_pizzaria')

//Função: Visualizar as informações dos clientes
const getClientes = () => {

        let clientes = tony_pizzaria.usuariosPizzaria.elementos

        return clientes
    }
    // console.log(getClientes())

//const getCategorias = () => {
//  let categorias = tony_pizzaria.categoriasPizzaria.elementos
//let json = {}
//let array = []
//categorias.forEach((categoria) => {
//  let objCategoria = {
//    nome: categoria.nome
// }
//array.push(objCategoria)
//})
//json.categorias = array
//return json
//}


const getCategorias = () => {
    let categorias = tony_pizzaria.categoriasPizzaria.elementos
    let categoriasArray = []

    categorias.forEach((categoria) => {

        let categoriaInfo = {
            nome: categoria.nome,
        }

        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
}
console.log(getCategorias())

const getProdutos = () => {
    let produtos = tony_pizzaria.produtosPizzaria.elementos
    let json = {}
    let array = []
    produtos.forEach((produto) => {
        let objProduto = {
            nome: produto.nome,
            valor: produto.valor
        }
        array.push(objProduto)
    })
    json.produtos = array
    return json
}


module.exports = {
    getClientes,
    getCategorias,
    getProdutos
}