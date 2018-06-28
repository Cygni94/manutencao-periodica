export const FETCH_VEICULOS = "FETCH_VEICULOS";

export function fetchVeiculos(state = {}, action) {
    const request = fetch(
        "https://my-json-server.typicode.com/coelhojs/manutencao-periodica/db"
    ).then(function(response) {
        return response.json();
    });
    return {
        type: FETCH_VEICULOS,
        payload: request,
    };
}
