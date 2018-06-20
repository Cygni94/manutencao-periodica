const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.status(200).send({
        data: [
            {
                type: "motos",
                id: "1",
                attributes: {
                    modelo: "Factor 125i ED",
                    fabricante: "Yamaha",
                    fotoURL: "assets/img/factor.jpg",
                },
                proprietarios: {
                    usuario: {
                        data: { id: "1", type: "usuario" },
                    },
                },
            },
            {
                type: "motos",
                id: "2",
                attributes: {
                    modelo: "Fazer 250 ABS",
                    fabricante: "Yamaha",
                    fotoURL:
                        "https://www.yamaha-motor.com.br/fazer250abs/assets/img/comparativo/fazer.png",
                },
                proprietarios: {
                    usuario: {
                        data: { id: "1", type: "usuario" },
                    },
                },
            },
        ],
        included: [
            {
                type: "usuario",
                id: "1",
                attributes: {
                    nome: "Donner",
                    idade: 30,
                    sexo: "masculino",
                },
            },
        ],
    });
});

module.exports = router;
