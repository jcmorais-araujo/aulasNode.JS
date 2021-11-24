const express = require("express"); //Importando o express
const app = express(); // Iniciando o express

// Criar rota
app.get("/", (requisicao, resposta) => {
    resposta.send("Bem vindo ao meu site!");
});

app.get("/blog", (requisicao, resposta) => {
    resposta.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", (requisicao, resposta) => {
    resposta.send("<h3>Bem vindo ao meu canal</h3>");
});

// Usando parametros
app.get("/ola/:nome/:empresa", (requisicao, resposta) => {
    // requisicao => dados enviados pelo usuário
    // resposta => resposta que vai ser enviada para o usuário
    var nome = requisicao.params.nome;
    var empresa = requisicao.params.empresa;
    resposta.send(`<h1>Olá ${nome}! Você ainda trabalha na empresa ${empresa}</h1>`);
});

// Usando Query params
app.get("/canal/youtube", (requisicao, resposta) => {
    var canal = requisicao.query["canal"];

    if (canal) {
        resposta.send(canal);
    }else{
        resposta.send("Nenhum canal fornecido");
    }
});



// Criar servidor
app.listen(4000, (erro) => {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})