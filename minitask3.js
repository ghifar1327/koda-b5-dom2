const div = document.querySelector("div.grid");
const fragment = document.createDocumentFragment()
async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30";
  try {
    const res = await fetch(url);

    const data = await res.json();
    const nameChar = data.results.map((idx) => idx.name);
    const urlChild = data.results.map((idx) => idx.url);
    const responses = await Promise.all(
      urlChild.map((url) => fetch(url).then((res) => res.json()))
    );
    const detailChar = responses.map((res, i) => ({
      name: nameChar[i],
      image: res.sprites.front_shiny,
      type: res.types.map(idx=> idx.type.name)
      // abilities: res.abilities.map((idx) => idx.ability.name),
    }));
    console.log(detailChar);
    detailChar.forEach((item)=>{
      const cardPoke = document.createElement('div')
      cardPoke.style.border = "1px solid black"
      cardPoke.style.borderRadius = "8px"
      cardPoke.style.width = 'fit-content'
      cardPoke.style.padding = '5px'
      cardPoke.style.textAlign = 'center'
      const img = document.createElement('img')
      img.src = item.image
      img.alt = item.name
      img.style.width= '200px'
      const h2 = document.createElement('h2')
      h2.textContent = item.name
      const p = document.createElement('p')
      p.textContent = item.type
      cardPoke.append(img,h2,p)
      fragment.append(cardPoke)
    })
    div.appendChild(fragment)
  } catch (error) {
    console.log(error);
  }
}

getData();
