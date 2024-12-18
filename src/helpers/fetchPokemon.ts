import get from "../utils/https";

interface PokemonApiResponse {
  id: number;
  name: string;
  sprites: {
    other:{
      "official-artwork":{
        front_default: string;
      }
    }
  }
}

interface GenerationApiResponse { 
  id: number;
  name: string;
  pokemon_species: SimplePokemonData[];
}

interface SimplePokemonData {
  name: string;
  url: string;
}

export async function fetchPokemon(id: number){
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

export async function fetchPokemonByGeneration(gen: number){
  const response = (await get(`https://pokeapi.co/api/v2/generation/${gen}`)) as GenerationApiResponse;

  const data = response.pokemon_species.map((pokemon) => ({  
      id: parseInt(pokemon.url.split("/").filter(Boolean).pop() || "1"),
      name: pokemon.name,
      imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/").filter(Boolean).pop()}.png`,
  }));

  return data;
}