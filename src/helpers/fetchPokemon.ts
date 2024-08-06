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
  const data = {
    id: response.id,
    name: response.name,
    imgUrl: response.sprites.other["official-artwork"].front_default,
  };
  return data;
}