const express = require('express');
const cors = require('cors');
const app = express();

// app.use(cors());

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo'
    });
});

module.exports = app;