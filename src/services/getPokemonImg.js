

export default function getPokemonIMG({entityName = 'pikachu'} = {},{entity='pokemon'}={})
{
    const apiURL = `https://pokeapi.co/api/v2/${entity}/${entityName}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response =>{

        const pokemonSpritesValue = Object.entries(response.sprites)

        if(pokemonSpritesValue && entity == 'pokemon'){

            pokemonSpritesValue.filter(x => x !== null)
            pokemonSpritesValue.splice(-2)
        
        }

        var pokemonData = []

        pokemonSpritesValue.forEach( image => {
          if(image[1] != null){
              var  url  = image[1]
              var  title  = image[0]
              pokemonData.push({url,title})
          }
        })

        return pokemonData

      })
}
