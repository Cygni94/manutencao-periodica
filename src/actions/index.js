export const FETCH_VEICULOS = "FETCH_VEICULOS";
export const FETCH_VEICULO = "FETCH_VEICULO";
export const CREATE_VEICULO = "CREATE_VEICULO";
export const DELETE_VEICULO = "DELETE_VEICULO";

const ROOT_URL =
    "https://my-json-server.typicode.com/coelhojs/manutencao-periodica/db";

export function fetchVeiculos(state = {}, action) {
    const request = fetch(`${ROOT_URL}`).then(function(response) {
        return response.json();
    });
    return {
        type: FETCH_VEICULOS,
        payload: request,
    };
}
