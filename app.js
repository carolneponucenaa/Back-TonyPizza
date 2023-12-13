const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const funcoes = require('./model/pizzaria_array_json')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors)
    next()
})

//1

app.get('/usuarios/', cors(), async(request, response, next) => {

    response.json(funcoes.getClientes())
    response.status(200)

})

//2
app.get('/categoria', cors(), async(request, response, next) => {


    let categoria = require('./model/pizzaria_array_json')
    let categorias = categoria.getCategorias()

    response.json(categorias)
    response.status(200)

})

//3
app.get('/produtos', cors(), async(request, response, next) => {

    let produto = require('./model/pizzaria_array_json')
    let produtos = produto.getProdutos();

    response.json(produtos)
    response.status(200)

})

app.listen(8080, function() {
    console.log('API funcionando e aguardando requisições')
})