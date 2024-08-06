import get from "../utils/https";

interface PokemonApiResponse {
  id: number;
  name: string;
  sprites:{
    other:{
      "official-artwork":{
        front_default: string;
      }
    }
  }
}

export default async function fetchPokemon(id: number){
  const response = (await get(`https://pokeapi.co/api/v2/pokemon/${id}`)) as PokemonApiResponse;
  let name = response.name;
  let hyphenIndex = name.indexOf('-');
  if (hyphenIndex !== -1){
    name = name.slice(0, hyphenIndex);
  }

  const data = {
    id: response.id,
    name: name,
    imgUrl: response.sprites.other["official-artwork"].front_default,
  };
  return data;
}