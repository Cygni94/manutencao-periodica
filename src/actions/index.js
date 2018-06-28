export const FETCH_VEICULOS = "FETCH_VEICULOS";

const ROOT_URL =
    "https://my-json-server.typicode.com/coelhojs/manutencao-periodica/db";

export function fetchVeiculos(state = {}, action) {
    const request = fetch(ROOT_URL);
    console.log(request);
    return {
        type: FETCH_VEICULOS,
        payload: request,
    };
}
