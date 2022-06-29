
export default function getPageInfo({entity='item'}={})
{
    const apiURL = `https://pokeapi.co/api/v2/${entity}/`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response =>{

        const {results} = response

        return results;
        
      })
}
