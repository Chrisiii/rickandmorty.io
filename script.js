const url = "https://rickandmortyapi.com/api/character"
const searchBar = document.getElementById("search")
const searchForm = document.getElementById("searchText")
let allData = []

async function allCharacters(){
  const response = await fetch(url);
  const data = await response.json();
  allData = data.results;
  createCharacters(data.results);
}
allCharacters();

function createCharacters(charactersArray){
  console.log(charactersArray)
    const characterCont = document.querySelector('#characterContainer');
    characterCont.innerHTML = ""
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

searchForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const searchStr = searchBar.value.toLowerCase().trim();
  if(searchStr){
    let searchValue = allData.filter(filteredCharacter => {
      return (filteredCharacter.name.toLowerCase().includes(searchStr));
    });
    createCharacters(searchValue);
  } else {
    createCharacters(allData)
  }
});

searchBar.addEventListener("keyup", (e) => {});
