export default function() {
  return [{ name: "Factor", maker: "Yamaha", img: "assets/img/factor.jpg" }];
}

const Veiculo = {
  tipo: 'Carro',
  properties: {
    fotoURL: 'string',
    fabricante:  'string',
    modelo: 'string',
    quilometragem: {type: 'int', default: 0},
  }
};

const Moto = {
  tipo: 'Moto',
  properties: {
    fotoURL: 'string',
    fabricante:  'string',
    modelo: 'string',
    quilometragem: {type: 'int', default: 0},
  }
};

const Usuario = {
  tipo: 'Usuario',
  properties: {
    nome:     'string',
    dataNasc: 'date',
    Carros:     'Carro[]',
    Motos: 'Moto[]',
    fotoURL: 'string'
  }
};