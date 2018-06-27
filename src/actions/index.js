export const FETCH_VEICULOS = "FETCH_VEICULOS";

export function fetchVeiculos() {
    const request = fetch(`http://localhost:3666/data`)
        .then(result => result.json())
        .then(veiculos =>
            this.setState({
                veiculos: [
                    {
                        id: veiculos.id,
                        tipo: veiculos.tipo,
                        fabricante: veiculos.fabricante,
                        modelo: veiculos.modelo,
                        fotoURL: veiculos.fotoURL,
                    },
                ],
            })
        );

    return {
        type: FETCH_VEICULOS,
        payload: request,
    };
}
