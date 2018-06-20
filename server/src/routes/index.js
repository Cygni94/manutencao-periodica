const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.status(200).send({
        Factor: {
            fotoURL: "assets/img/factor.jpg",
            fabricante: "Yamaha",
            modelo: "Factor 125i ED",
        },
        Fazer: {
            fotoURL:
                "https://www.yamaha-motor.com.br/fazer250abs/assets/img/comparativo/fazer.png",
            fabricante: "Yamaha",
            modelo: "Fazer 250 ABS",
        },
    });
});

module.exports = router;
