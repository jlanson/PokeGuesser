import { usePokemonReducer } from "../store/hooks.ts";
import { MouseEvent } from "react";

interface MenuProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Menu({handleClick}: MenuProps) {
  const [genOne, toggleGenOne] = usePokemonReducer('generationOne');
  const [genTwo, toggleGenTwo] = usePokemonReducer('generationTwo');
  const [genThree, toggleGenThree] = usePokemonReducer('generationThree');
  const [genFour, toggleGenFour] = usePokemonReducer('generationFour');
  const [genFive, toggleGenFive] = usePokemonReducer('generationFive');
  const [genSix, toggleGenSix] = usePokemonReducer('generationSix');
  const [genSeven, toggleGenSeven] = usePokemonReducer('generationSeven');
  const [genEight, toggleGenEight] = usePokemonReducer('generationEight');
  const [genNine, toggleGenNine] = usePokemonReducer('generationNine');
  const [allGenerations, toggleAllGenerations] = usePokemonReducer('all');

  return (
    <div>
      <h1>PokeGuesser</h1>
      <form action="">
        <label htmlFor="generationOne">Generation One</label>
        <input type="checkbox" id="generationOne" checked={genOne} onChange={toggleGenOne} />
        <label htmlFor="generationTwo">Generation Two</label>
        <input type="checkbox" id="generationTwo" checked={genTwo} onChange={toggleGenTwo} />
        <label htmlFor="generationThree">Generation Three</label>
        <input type="checkbox" id="generationThree" checked={genThree} onChange={toggleGenThree} />
        <label htmlFor="generationFour">Generation Four</label>
        <input type="checkbox" id="generationFour" checked={genFour} onChange={toggleGenFour} />
        <label htmlFor="generationFive">Generation Five</label>
        <input type="checkbox" id="generationFive" checked={genFive} onChange={toggleGenFive} />
        <label htmlFor="generationSix">Generation Six</label>
        <input type="checkbox" id="generationSix" checked={genSix} onChange={toggleGenSix} />
        <label htmlFor="generationSeven">Generation Seven</label>
        <input type="checkbox" id="generationSeven" checked={genSeven} onChange={toggleGenSeven} />
        <label htmlFor="generationEight">Generation Eight</label>
        <input type="checkbox" id="generationEight" checked={genEight} onChange={toggleGenEight} />
        <label htmlFor="generationNine">Generation Nine</label>
        <input type="checkbox" id="generationNine" checked={genNine} onChange={toggleGenNine} />
        <label htmlFor="allGenerations">All Generations</label>
        <input type="checkbox" id="allGenerations" checked={allGenerations} onChange={toggleAllGenerations} />
      </form>
      <p>
        <button onClick={handleClick}>Start Game!</button>
      </p>
    </div>
  );
}