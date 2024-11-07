import { useEffect, useRef, useState } from "react";
import Display from "./Display/Display";
import Input from "./Input";
import { generatePokedexIds } from "../helpers/generatePokedexIds";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App";
import {fetchPokemon, removePokemon as removePokemonFromStore } from "../store/slices/gameStateSlice";

export interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
}

export default function PokeGuesser() {

  const dispatch = useDispatch<AppDispatch>();
  const {generations} = useSelector((state: RootState) => state.gameSettings);
  const {pokemonPool} = useSelector((state: RootState) => state.gameState);

  let pokedexNumbersRef = useRef<number[]>(generatePokedexIds());
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | null>(null);
  const [win, setWin] = useState<boolean>(false);

  // Sets the current pokemon and fetches a new one from the pokeapi
  // async function setNewPokemon(){
  //     const randomPokemonIndex = Math.floor(Math.random() * pokedexNumbersRef.current.length);
  //     const newPokemon = await fetchPokemon(pokedexNumbersRef.current[randomPokemonIndex] + 1);
  //     setChosenPokemon(newPokemon);
  // }

  async function loadAndSetPokmemon(){
    await dispatch(fetchPokemon(generations));
  }

  function setNewPokemon(){
    const randomPokemonIndex = Math.floor(Math.random() * pokemonPool.length);
    setChosenPokemon(pokemonPool[randomPokemonIndex]);
  }


  function removePokemon(){
    if (chosenPokemon !== null){
      dispatch(removePokemonFromStore(chosenPokemon.id));
    }
    if(pokedexNumbersRef.current.length === 0){
      setWin(true);
    } else {
      setNewPokemon();
    }
  }

  useEffect(() => {
    if(pokemonPool.length === 0){
      loadAndSetPokmemon();
    }
  }, []);

  useEffect(() => {
    if (pokemonPool.length > 0 && !chosenPokemon) {
      setNewPokemon();
    }
  }, [pokemonPool]);
  
  
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
  }else if(win){
    content = <div>You won!!!</div>
  }
  return(
    <>
      {content}
    </>
  );
}