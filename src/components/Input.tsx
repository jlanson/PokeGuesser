import { useRef } from "react";
import { type Pokemon } from "./Game.tsx";

interface InputProps {
  pokemon: Pokemon;
  removePokemon: () => void;
}

export default function Input({pokemon, removePokemon}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(){
    if(inputRef.current){
      const guess = inputRef.current.value.toLowerCase();
      if(guess === pokemon.name.toLowerCase()){
        alert('Correct!');
        inputRef.current.value = '';
        removePokemon();
      } else {
        alert('Incorrect!');
      } 
    }
  }
  
  return(
    <div>
      <input type="text" placeholder="Enter your guess" ref={inputRef} />
      <p>
        <button onClick={handleClick}>Submit</button>
      </p>
    </div>
  );
}