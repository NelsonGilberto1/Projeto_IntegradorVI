const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const Produto = [ 
    {id: 1,  nome: "Nodebook" , preco: 6700},
    {id: 2, nome: "Mouse", preco: 120}
];

app.get("/produtos", (req, res)=>{
    res.status(200).json(Produto);

});

app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
});



