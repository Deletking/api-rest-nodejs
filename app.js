const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

// app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === '0') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PACTH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    });
});

module.exports = app;