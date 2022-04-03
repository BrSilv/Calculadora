const express = require('express');
const calcular = require('./calcular');
const app = express();
const port = 3000


app.get('/', (requisicao, resposta) => {
    const tipo = requisicao.query.tipo;
    const a = parseInt(requisicao.query.a);
    const b = parseInt(requisicao.query.b);
    
    if(tipo == 'soma' || tipo == '+' || tipo == 'sub' || tipo == '-' || tipo == 'mult' || tipo == '*' || tipo == 'div' || tipo == '/'){
    const result = calc(tipo, a, b);
    resposta.send(result);    
    } else{
        resposta.send('Utilize um dos seguintes operadores para calcular: soma, sub, mult ou div ');
    }
     
});

app.post('/', (requisicao, resposta) => {
    const pt = requisicao.body
    const result = calc(pt.tipo, pt.a, pt.b)
    resposta.send(result)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});


