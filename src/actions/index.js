export const FETCH_VEICULOS = "FETCH_VEICULOS";

const ROOT_URL = "http://localhost:3666/data";

export function fetchVeiculos(state = {}, action) {
    const request = fetch(`ROOT_URL`);
    // .then(result => result.json())
    // .then(veiculos =>
    //     this.setState({
    //         veiculos: [
    //             {
    //                 id: veiculos.id,
    //                 tipo: veiculos.tipo,
    //                 fabricante: veiculos.fabricante,
    //                 modelo: veiculos.modelo,
    //                 fotoURL: veiculos.fotoURL,
    //             },
    //         ],
    //     })
    // );

    return {
        type: FETCH_VEICULOS,
        payload: request,
    };
}
