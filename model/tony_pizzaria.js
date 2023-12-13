var usuariosPizzaria = {
    elementos:[
        {
            id:1,
            nome: "Carolina Neponucena",
            email:"carolinanepo09@gmail.com",
            senha: "carol1234",
            telefone:"99999-9999",
            foto:"",
            endereco:[
                {
                    rua: "Rua Neves Paulista",
                    numero: "7",
                    cidade:"Carapicuíba",
                    estado:"SP",
                    bairro:"Vila Dirce",
                    cep:"06335000"

                }
            ]

        },
        {
            id:2,
            nome: "Natália Bastazini",
            email:"nataliabasta08@gmail.com",
            senha: "natalia1234",
            telefone:"88888-8888",
            foto:"",
            endereco:[
                {
                    rua: "Rua Agenor da Silva Telles",
                    numero: "5",
                    cidade:"Tatuí",
                    estado:"SP",
                    bairro:"Vila Bandeirantes",
                    cep:"18279-270"

                },
                {
                    rua: "Rua Tenente Godofredo Cerqueira Leite",
                    numero: "25",
                    cidade:"São Paulo",
                    estado:"SP",
                    bairro:"Fazenda da Juta",
                    cep:"03977-000"

                }
            ]

        },
        {
            id:3,
            nome: "Luis Becker",
            email:"beckerluis08@gmail.com",
            senha: "becker1234",
            telefone:"77777-7777",
            foto:"",
            endereco:[
                {
                    rua: "Rua Conceição de Alagoas",
                    numero: "17",
                    cidade:"Guarulhos",
                    estado:"SP",
                    bairro:"Vila Flórida",
                    cep:"07130-060"

                },
                {
                    rua: "Rua Carlos Alberto Trevizan",
                    numero: "15",
                    cidade:"Osasco",
                    estado:"SP",
                    bairro:"Bela Vista",
                    cep:"06060-255"

                }
            ]

        },
        {
            id:4,
            nome: "Paloma Breves",
            email:"palomavesso123@gmail.com",
            senha: "paloma1234",
            telefone:"66666-6666",
            foto:"",
            endereco:[
                {
                    rua: "Rua Manoel Gomes",
                    numero: "7",
                    cidade:"São Carlos",
                    estado:"SP",
                    bairro:"Jardim São Carlos 5",
                    cep:"13563-510"

                }
            ]

        },
        {
            id:5,
            nome: "Pedro Pedraga",
            email:"pedropedraga12@gmail.com",
            senha: "pedro1234",
            telefone:"55555-5555",
            foto:"",
            endereco:[
                {
                    rua: "Rua Pedro Bononi",
                    numero: "7",
                    cidade:"Sertãozinho",
                    estado:"SP",
                    bairro:"Jardim Bonsucesso",
                    cep:"14161-204"

                },
                {
                    rua: "Rua João Café Filho",
                    numero: "27",
                    cidade:"Campinas",
                    estado:"SP",
                    bairro:"Jardim Santa Genebra",
                    cep:"13080-231"

                }
            ]

        }
    ]
}
var categoriasPizzaria = {
    elementos:[
        {
            id: 1,
            nome: "Pizza Salgadas",
            imagem:""
        },
        {
            id: 2,
            nome: "Pizza Doce",
            imagem:""
        },
        {
            id: 3,
            nome: "Pizzas Especiais",
            imagem:""
        },
        {
            id: 4,
            nome: "Sobremesas",
            imagem:""
        },
        {
            id: 5,
            nome: "Sobremesas Especiais",
            imagem:""
        },
        {
            id: 6,
            nome: "Bebidas",
            imagem:""

        },
        {
            id: 7,
            nome: "Acompanhamentos Extras",
            imagem:""

        },
    ]
}
var produtosPizzaria ={
    elementos:[
        //Pizzas Especiais
        {
            id: 1,
            nome:"Napolitana",
            imagem:"",
            descricaoDoProduto:"mussarela, rodelas de tomate, queijo parmesão e orégano",
            valor:"R$42,90",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                  {id:1,
                    titulo: "Perfeita!",
                   comentario: "Pizza muito deliciosa, irei comprar mais vezes!",
                   usuario: [
                    {
                        nome: usuariosPizzaria.elementos[0].nome,
                        foto: usuariosPizzaria.elementos[0].foto          
                    }
                   ]
                  }
            ]
        },
        {
            id: 2,
            nome:"Havaiana",
            imagem:"",
            descricaoDoProduto:"mussarela, lombo e abacaxi",
            valor:"R$42,00",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                {id:2,
                  titulo: "Não gostei!",
                 comentario: "Em minha opinião, não gostei da combinação do abacaxi na pizza ...",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[1].nome,
                      foto: usuariosPizzaria.elementos[1].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 3,
            nome:"Canadense",
            imagem:"",
            descricaoDoProduto:"mussarela, lombo, champignon, palmito e catupiry",
            valor:"R$42,90",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                {id:3,
                  titulo: "Adorei!",
                 comentario: "Primeira vez que havia experimentado, irei comprar mais vezes!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[2].nome,
                      foto: usuariosPizzaria.elementos[2].foto          
                  }
                 ]
                }
          ]
        },
        //Pizzas Salgadas
        {
            id: 4,
            nome:"Mussarela",
            imagem:"",
            descricaoDoProduto:"mussarela, rodelas de tomate e orégano",
            valor:"R$29,90",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                }
            ],
            comentarios: [
                {id:4,
                  titulo: "Deliciosa!",
                 comentario: "Tradicional mas muito saborosa!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[3].nome,
                      foto: usuariosPizzaria.elementos[3].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 5,
            nome:"Calabresa",
            imagem:"",
            descricaoDoProduto:"mussarela, linguiça calabresa e cebola",
            valor:"R$29,90",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                }
            ],
            comentarios: [
                {id:5,
                  titulo: "Odiei!",
                 comentario: "A pizza estava fria quando fui comer, não irei comprar novamente ...",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[4].nome,
                      foto: usuariosPizzaria.elementos[4].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 6,
            nome:"Toscana",
            imagem:"",
            descricaoDoProduto:"linguiça calabresa bacon e catupiry",
            valor:"R$29,90",
            categoria:[
                {
                    id:1,
                    nome:"Pizzas Salgadas"
                }
            ],
            comentarios: [
                {id:6,
                  titulo: "Minha favorita!",
                 comentario: "Gosto muito dessa pizza, comum e saborosa!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[0].nome,
                      foto: usuariosPizzaria.elementos[0].foto          
                  }
                 ]
                }
          ]
        },
        //Pizzas Especiais
        {
            id: 7,
            nome:"Nutella com Morango",
            imagem:"",
            descricaoDoProduto:"nutella e morango",
            valor:"R$42,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                {id:7,
                  titulo: "Maravilhosa!",
                 comentario: "A pizza veio com bastante nutella, do jeito que eu amo! ",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[1].nome,
                      foto: usuariosPizzaria.elementos[1].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 8,
            nome:"Beijinho",
            imagem:"",
            descricaoDoProduto:"chocolate branco, coco e leite condensado",
            valor:"R$42,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                {id:8,
                  titulo: "Péssima ...",
                 comentario: "Achei enjoativa demais, não vale o preço!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[2].nome,
                      foto: usuariosPizzaria.elementos[2].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 9,
            nome:"Paçoca",
            imagem:"",
            descricaoDoProduto:"chocolate e paçoca de amendoim",
            valor:"R$42,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                },
                {
                    id:3,
                    nome:"Pizzas Especiais"
                }
            ],
            comentarios: [
                {id:9,
                  titulo: "Meu doce favorito!",
                 comentario: "Combinação perfeita entre chocolate e paçoca!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[3].nome,
                      foto: usuariosPizzaria.elementos[3].foto          
                  }
                 ]
                }
          ]
        },
        //Pizzas Doces
        {
            id: 10,
            nome:"Chocolate",
            imagem:"",
            descricaoDoProduto:"chocolate preto ou branco",
            valor:"R$24,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                }
            ],
            comentarios: [
                {id:10,
                  titulo: "Clássica!",
                 comentario: "Clássica, muito boa porém esperava mais ...",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[4].nome,
                      foto: usuariosPizzaria.elementos[4].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 11,
            nome:"Romeu e Julieta ",
            imagem:"",
            descricaoDoProduto:"goiabada e  mussarela",
            valor:"R$24,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                }
            ],
            comentarios: [
                {id:11,
                  titulo: "Me apaixonei!",
                 comentario: "Melhor pizza que eu já comi na minha vida!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[0].nome,
                      foto: usuariosPizzaria.elementos[0].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 12,
            nome:"M&M",
            imagem:"",
            descricaoDoProduto:"chocolate e M&M",
            valor:"R$24,90",
            categoria:[
                {
                    id:2,
                    nome:"Pizzas Doces"
                }
            ],
            comentarios: [
                {id:12,
                  titulo: "Pouco M&M",
                comentario: "Pensei que iria conter mais M&M´s, mas estava maravilhosa, só acho que deveria vir mais",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[1].nome,
                      foto: usuariosPizzaria.elementos[1].foto          
                  }
                 ]
                }
          ]
        },
        ////////////////////////////// BEBIDAS ////////////////////////////////
        {
            id: 13,
            nome:"Refrigerante Coca Cola 2L",
            imagem:"",
            valor:"R$8,99",
            categoria:[
                {
                    id:6,
                    nome:"Bebidas"
                }
            ]
        },
        {
            id: 14,
            nome:"Energético Bally 2L",
            imagem:"",
            valor:"R$7,99",
            categoria:[
                {
                    id:6,
                    nome:"Bebidas"
                }
            ]
        },
        {
            id: 15,
            nome:"Cerveja Premium Heineken 600ml",
            imagem:"",
            valor:"R$12,39 un",
            categoria:[
                {
                    id:6,
                    nome:"Bebidas"
                }
            ]
        },
        {
            id: 16,
            nome:"Refrigerante Sabor Laranja Sukita Antarctica 2L",
            imagem:"",
            valor:"R$4,45",
            categoria:[
                {
                    id:6,
                    nome:"Bebidas"
                }
            ]
        },
        //////////////////////////// SOBREMESAS /////////////////////////
        {
            id: 17,
            nome:"Mousse de Maracujá",
            imagem:"",
            valor:"R$12,00",
            categoria:[
                {
                    id:4,
                    nome:"Sobremesas"
                }
            ],
            comentarios: [
                {id:17,
                  titulo: "Muito saboroso!",
                 comentario: "O mousse estava bem cremoso, meu sabor favorito mas deveria ter mais opções de sabores.",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[2].nome,
                      foto: usuariosPizzaria.elementos[2].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 18,
            nome:"Pudim",
            imagem:"",
            valor:"R$12,00",
            categoria:[
                {
                    id:4,
                    nome:"Sobremesas"
                }
            ],
            comentarios: [
                {id:18,
                  titulo: "Indicado!",
                 comentario: "Melhor sobremesa da pizzaria, indiquei para vários amigos!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[3].nome,
                      foto: usuariosPizzaria.elementos[3].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 19,
            nome:"Petit Gateau",
            imagem:"",
            valor:"R$15,90",
            categoria:[
                {
                    id:4,
                    nome:"Sobremesas"
                },
                {
                    id:5,
                    nome:"Sobremesas Especiais"
                }
            ],
            comentarios: [
                {id:19,
                  titulo: "Bom!",
                 comentario: "Achei pequeno, mas o suficiente para uma pessoa.",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[4].nome,
                      foto: usuariosPizzaria.elementos[4].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 20,
            nome:"Cheesecake",
            imagem:"",
            valor:"R$15,90",
            categoria:[
                {
                    id:4,
                    nome:"Sobremesas"
                },
                {
                    id:5,
                    nome:"Sobremesas Especiais"
                }
            ],
            comentarios: [
                {id:20,
                  titulo: "Gostei!",
                 comentario: "Atendeu minhas expectativas!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[0].nome,
                      foto: usuariosPizzaria.elementos[0].foto          
                  }
                 ]
                }
          ]
        },
        //////////////////////////////// EXTRAS ///////////////////////////////////////////////////
        {
            id: 21,
            nome:"Batata frita",
            imagem:"",
            valor:"R$14,90",
            categoria:[
                {
                    id:7,
                    nome:"Acompanhamentos Extras"
                }
            ],
            comentarios: [
                {id:21,
                  titulo: "Surreal!",
                 comentario: "As batatas super crocantes, no ponto correto de sal, combinou muio com a pizza!",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[1].nome,
                      foto: usuariosPizzaria.elementos[1].foto          
                  }
                 ]
                }
          ]
        },
        {
            id: 22,
            nome:"Patês",
            imagem:"",
            valor:"R$14,90",
            categoria:[
                {
                    id:7,
                    nome:"Acompanhamentos Extras"
                }
            ],
            comentarios: [
                {id:22,
                  titulo: "Negativo!",
                 comentario: "Não compraria novamente, não acho um acompanhamento ideal, prefiro a batata",
                 usuario: [
                  {
                      nome: usuariosPizzaria.elementos[2].nome,
                      foto: usuariosPizzaria.elementos[2].foto          
                  }
                 ]
                }
          ]
        }
    ]
}
module.exports = {
    usuariosPizzaria,
    categoriasPizzaria,
    produtosPizzaria
}