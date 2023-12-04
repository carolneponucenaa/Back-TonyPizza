/**********************************************************************
 * Objetivo: Informações sobre uma determinada pizzaria.
 * Data: 04/12/2023.
 * Autor: Carolina Neponucena Costa.
 * Versao: 1.0
 **********************************************************************/
var tony_pizzaria = require('./tony_pizzaria')

//Função: Visualizar as informações dos clientes
const getClientes  = () =>{

    let clientes = tony_pizzaria.usuariosPizzaria.elementos

    return clientes
}
// console.log(getClientes())

const getCategorias = () =>{

    let categorias = tony_pizzaria.categoriasPizzaria.elementos
    let json = {}
    let array = []
    categorias.forEach((categoria) => {

        let json = {
            nome: categoria.nome
        }
        array.push(json)
    })
    json.categorias = array
    console.log(json)
    // return clientes
}

getCategorias()