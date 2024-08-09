import { usePokemonReducer } from "../store/hooks.ts";
import { MouseEvent } from "react";
import Checkbox from "./UI/Checkbox.tsx";

interface MenuProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Menu({handleClick}: MenuProps) {

  return (
    <div>
      <h1>PokeGuesser</h1>
      <form action="">
        <Checkbox label="Generation One" generation="generationOne"/>
        <Checkbox label="Generation Two" generation="generationTwo"/>
        <Checkbox label="Generation Three" generation="generationThree"/>
        <Checkbox label="Generation Four" generation="generationFour"/>
        <Checkbox label="Generation Five" generation="generationFive"/>
        <Checkbox label="Generation Six" generation="generationSix"/>
        <Checkbox label="Generation Seven" generation="generationSeven"/>
        <Checkbox label="Generation Eight" generation="generationEight"/>
        <Checkbox label="Generation Nine" generation="generationNine"/>
        <Checkbox label="All Generations" generation="all"/>
      </form>
      <p>
        <button onClick={handleClick}>Start Game!</button>
      </p>
    </div>
  );
}