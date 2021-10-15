const url = ("https://rickandmortyapi.com/api/character")
const searchBar = document.getElementById("#search")

let filteredCharacters = []

async function allCharacters(){
  const response = await fetch(url);
  const data = await response.json();
  createCharacters(data.results);
  filteredCharacters = data.results
}
allCharacters();


function createCharacters(charactersArray){
    const characterCont = document.querySelector('#characterContainer');
    charactersArray.forEach(character => {
      characterCont.innerHTML = characterCont.innerHTML +
      `<ol id="list">
      <h2>${character.name}</h2>
      <h4>Status:${character.status}</h4>
      <h4>Species:${character.species}</h4>
      <h4>Location:${character.location.name}</h4>
      <img src=${character.image}></img>
      </ol>
      `
    });
}
searchBar.addEventListener("keyup", (e) => {
  const searchStr = e.target.value.toLowerCase();
  let searchValue = filteredCharacters.filter(filteredCharacter => {
    return (filteredCharacter.name.toLowerCase().includes(searchStr));
  });
  createCharacters(searchValue);
});
