const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos.'
    });
});

router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Insere um produto.',
        produtoCriado: produto
    });

});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id == 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial.',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID.',
            id: id
        })
    }
})

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado com sucesso.'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído com sucesso.'
    });
});

module.exports = router;