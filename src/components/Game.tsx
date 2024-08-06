import { useEffect, useRef, useState } from "react";
import Display from "./Display";
import Input from "./Input";
import fetchPokemon from "../helpers/fetchPokemon";

export interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
}

export default function PokeGuesser() {

  let pokedexNumbersRef = useRef<number[]>(Array.from(Array(5).keys()));
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | null>(null);
  const [win, setWin] = useState<boolean>(false);

  async function setNewPokemon(){
      const randomPokemonIndex = Math.floor(Math.random() * pokedexNumbersRef.current.length);
      const newPokemon = await fetchPokemon(pokedexNumbersRef.current[randomPokemonIndex] + 1);
      setChosenPokemon(newPokemon);
  }

  function removePokemon(){
    if (chosenPokemon){
      pokedexNumbersRef.current = pokedexNumbersRef.current.filter((num) => num !== chosenPokemon.id - 1);
    }
    if(pokedexNumbersRef.current.length === 0){
      setWin(true);
    } else {
      setNewPokemon();
    }
  }

  useEffect(() => {
    setNewPokemon();
    return () => {
      setChosenPokemon(null);
    }
  }, []);
  
  let content = null;
  let displayContent = null;
  let inputContent = null;
  if (chosenPokemon && !win){
    displayContent = <Display img={{url: chosenPokemon.imgUrl, alt: chosenPokemon.name}} />;
    inputContent = <Input pokemon={chosenPokemon} removePokemon={removePokemon}/>;
    content = (
      <div>
        {displayContent}
        {inputContent}
      </div>
    )
  }else{
    content = <div>You won!!!</div>
  }
  return(
    <>
      {content}
    </>
  );
}