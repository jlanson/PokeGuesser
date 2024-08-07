import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../App.tsx'
import { toggleGenerationOne } from "../store/slices/pokemonGameSlice";

interface MenuProps {
  handleClick: () => void;
}

export default function Menu({handleClick}: MenuProps) {
  const genOne = useSelector((state: RootState)=>state.pokemonGame.generationOne);
  const dispatch = useDispatch();

  function handleGenOneClick(){
    dispatch(toggleGenerationOne());
    console.log(genOne);
  }
  

  return (
    <div>
      <h1>PokeGuesser</h1>
      <form action="">
        <label htmlFor="generation-one">One</label>
        <input onClick={handleGenOneClick} checked={genOne} type="radio" id="generation-one" name="generation-one" />
        <label htmlFor="generation-two">Two</label>
        <input type="radio" id="generation-two" name="generation-two" />
        <label htmlFor="generation-three">Three</label>
        <input type="radio" id="generation-three" name="generation-three" />
        <label htmlFor="generation-four">Four</label>
        <input type="radio" id="generation-four" name="generation-four" />
      </form>
      <p>
        <button onClick={handleClick}>Start Game!</button>
      </p>
    </div>
  );
}