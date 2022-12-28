
const search = document.getElementById("form");
const app = document.getElementById("app");
const movesContainer = document.querySelector(".moves");
let pokemon = "";

const pokeContainer = document.createElement("div");
const pokePicture = document.createElement("picture");
const pokeImage = document.createElement("img");
const pokeName = document.createElement("h2");
const ability = document.createElement("h4");

pokeContainer.classList.add("pokeContainer");
pokeImage.classList.add("pokeImage");
pokeName.classList.add("pokeName");

app.appendChild(pokeContainer);
pokeContainer.appendChild(pokeName);
pokeContainer.appendChild(pokePicture);
pokePicture.appendChild(pokeImage);
pokeContainer.appendChild(ability);


function renderPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getPokemon(data);
            getMoves(data);
        });
}

function getPokemon(data) {
    pokeName.innerHTML = data.name;
    var pokeSrc = data.sprites.other.dream_world
        .front_default;
    pokeImage.src = pokeSrc;
    var abilities = data.abilities[ 0 ].ability.name;
    ability.innerHTML = `Ability: ${abilities}`;
}
const h4 = document.createElement("h4");
movesContainer.appendChild(h4);

function getMoves(data) {
    h4.innerHTML = data.moves[ 0 ].move.name;
}


search.addEventListener("submit", (e) => {
    e.preventDefault();
    pokemon = form.pokemonInput.value;
    renderPokemon(pokemon);
    if (pokemon == "") {
        renderPokemon("pikachu");
    }
});

renderPokemon("pikachu");