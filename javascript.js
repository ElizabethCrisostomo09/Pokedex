let list = document.getElementById("listPokemon")
function consultPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
      response.json()
        .then(function (pokemon) {
          createPokemon(pokemon,num)
        })
    });
}
//Consult a pokemon randomly
function consultPokemons() {
  let firstid = Math.round(Math.random()* 80)
  consultPokemon(firstid, 1)
}
//Joins with the HTML
function createPokemon(pokemon,num) {
  let item = list.querySelector(`#pokemon-${num}`)
  let picture = item.getElementsByTagName("img")[0]
  picture.setAttribute("src", pokemon.sprites.front_default)
  let name = item.getElementsByTagName("p")[0]
  name.textContent = pokemon.name
}
consultPokemons();