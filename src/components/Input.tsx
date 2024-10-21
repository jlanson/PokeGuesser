import { FormEvent, useRef, useState } from "react";
import { type Pokemon } from "./Game.tsx";

interface InputProps {
  pokemon: Pokemon;
  removePokemon: () => void;
}

export default function Input({pokemon, removePokemon}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [counter, setCounter] = useState<number>(0);

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    if(inputRef.current){
      const guess = inputRef.current.value.toLowerCase();
      if(guess === pokemon.name.toLowerCase()){
        alert('Correct!');
        setCounter(prev => prev + 1);
        inputRef.current.value = '';
        removePokemon();
      } else {
        alert('Incorrect!');
      } 
    }
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your guess" ref={inputRef} />
        <p>
          <button >Submit</button>
        </p>
      </form>
      <div>Score: {counter}</div>
    </div>
  );
}