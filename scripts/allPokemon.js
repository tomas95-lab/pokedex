const app = document.getElementById("app");

function getLink(url) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getPokemons(data);
        });

}
function getPokemons(data) {
    const pokemons = data.results;
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[ i ].url;
        fetch(`${pokemon}`)
            .then((res) => res.json())
            .then((poke) => {
                getPokemon(poke);
            });
    }
}

function getPokemon(data) {


    const pokeContainer = document.createElement("div");
    const pokePicture = document.createElement("picture");
    const pokeImage = document.createElement("img");
    const pokeName = document.createElement("h2");
    const ability = document.createElement("h4");
    pokeImage.setAttribute("loading", "lazy");

    pokeContainer.classList.add("pokeContainer");
    pokeImage.classList.add("pokeImage");
    pokeName.classList.add("pokeName");

    app.appendChild(pokeContainer);
    pokeContainer.appendChild(pokeName);
    pokeContainer.appendChild(pokePicture);
    pokePicture.appendChild(pokeImage);
    pokeContainer.appendChild(ability);

    pokeName.innerHTML = data.name;
    var pokeSrc = data.sprites.other.dream_world
        .front_default;
    pokeImage.src = pokeSrc;
    var abilities = data.abilities[ 0 ].ability.name;
    ability.innerHTML = `Ability: ${abilities}`;
    pokeName.innerHTML = data.name;
    var pokeSrc = data.sprites.other.dream_world
        .front_default;
    pokeImage.src = pokeSrc;
    var abilities = data.abilities[ 0 ].ability.name;
    ability.innerHTML = `Ability: ${abilities}`;

    pokeImage.addEventListener("progress", (e) => {
        pokeImage.style.background = "red";
    });
}

getLink('');
getLink('?offset=20&limit=10');
getLink('?offset=40&limit=10');
getLink('?offset=60&limit=10');
getLink('?offset=80&limit=10');
getLink('?offset=100&limit=10');
getLink('?offset=120&limit=10');
getLink('?offset=140&limit=10');
