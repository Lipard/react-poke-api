

export default function getPokemonIMG({pokemonName = 'pikachu'} = {})
{
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response =>{
        console.log(response)
        const arrayPokemonImg = Object.entries(response.sprites)
        let imgPokemonFormateadas = []
        arrayPokemonImg.forEach((pokemonImg)=>{
          if(typeof pokemonImg[1] === 'string' || pokemonImg[1] instanceof String){
            imgPokemonFormateadas.push(pokemonImg)
          }
        })

        return imgPokemonFormateadas

      })
}
