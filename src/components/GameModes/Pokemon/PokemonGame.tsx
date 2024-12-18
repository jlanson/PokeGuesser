import { useEffect, useRef, useState } from "react";
import Display from "../../Display/Display";
import Input from "../../UI/Inputs/Input";
import { generatePokedexIds } from "../../../helpers/generatePokedexIds";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../App";
import { fetchPokemon, removePokemon as removePokemonFromStore } from "../../../store/slices/gameStateSlice";
import Autocomplete from "../../UI/Inputs/Autocomplete";
import "./PokemonGame.css";

export interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
}

export default function PokemonGame() {

  const dispatch = useDispatch<AppDispatch>();
  const {generations} = useSelector((state: RootState) => state.gameSettings);
  const {pokemonPool} = useSelector((state: RootState) => state.gameState);

  let pokedexNumbersRef = useRef<number[]>(generatePokedexIds());
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | null>(null);
  const [win, setWin] = useState<boolean>(false);

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
    //TODO: Choose input component based on settings
    inputContent = <Input pokemon={chosenPokemon} removePokemon={removePokemon}/>;
    // content = (
    //   <div>
    //     {displayContent}
    //     <Autocomplete pokemon={chosenPokemon} removePokemon={removePokemon}/>
    //   </div>
    // )
    content = (
      <div className='pokemon-game'>
        <img className='pokemon-game-image' src="/src/assets/pokedex.png" alt="" />
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