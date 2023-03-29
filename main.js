const url = "https://pokeapi.co/api/v2/pokemon/6"
const p = document.querySelector(".fav-Pokemon")

fetch(url).then((response) => response.json())
.then((data) => {
    p.innerHTML = `My favorite pokemon is ${data.name}<br> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">`
})