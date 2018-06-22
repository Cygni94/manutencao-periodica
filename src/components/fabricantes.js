export default function fetchFabricantes() {
    let dropdown = document.querySelector("#fabricantes-dropdown");

    let defaultOption = document.createElement("option");
    defaultOption.text = "Selecione o fabricante";

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = "http://localhost:3666/fabricantes";

    fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                console.warn(
                    "Looks like there was a problem. Status Code: " +
                        response.status
                );
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                let option;
                for (let i = 0; i < data.length; i++) {
                    option = document.createElement("option");
                    option.text = data[i].fabricante;
                    option.value = data[i].fabricante;
                    dropdown.add(option);
                }
            });
        })
        .catch(function(err) {
            console.error("Fetch Error -", err);
        });
}
