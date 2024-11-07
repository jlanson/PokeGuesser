import { useSelector } from "react-redux";
import { RootState } from "../App";

export function generatePokedexIds(){
  const {generationOne, generationTwo, 
    generationThree, generationFour, 
    generationFive, generationSix, 
    generationSeven, generationEight, 
    generationNine, isAllGenerations
  } = useSelector((state: RootState) => state.gameSettings);

  if(isAllGenerations){
    return Array.from({length: 898}, (_, i) => i + 1);
  }

  let pokedexIds: number[] = [];
  if(generationOne){
    pokedexIds = pokedexIds.concat(Array.from({length: 151}, (_, i) => i + 1));
  }
  if(generationTwo){
    pokedexIds = pokedexIds.concat(Array.from({length: 100}, (_, i) => i + 152));
  }
  if(generationThree){
    pokedexIds = pokedexIds.concat(Array.from({length: 135}, (_, i) => i + 252));
  }
  if(generationFour){
    pokedexIds = pokedexIds.concat(Array.from({length: 107}, (_, i) => i + 387));
  }
  if(generationFive){
    pokedexIds = pokedexIds.concat(Array.from({length: 156}, (_, i) => i + 494));
  }
  if(generationSix){
    pokedexIds = pokedexIds.concat(Array.from({length: 72}, (_, i) => i + 650));
  }
  if(generationSeven){
    pokedexIds = pokedexIds.concat(Array.from({length: 88}, (_, i) => i + 722));
  }
  if(generationEight){
    pokedexIds = pokedexIds.concat(Array.from({length: 89}, (_, i) => i + 810));
  }
  if(generationNine){
    pokedexIds = pokedexIds.concat(Array.from({length: 1}, (_, i) => i + 899));
  }
  return pokedexIds;
}