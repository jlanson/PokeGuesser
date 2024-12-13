import { MouseEvent } from "react";
import Checkbox from "./UI/Checkbox.tsx";
import GameModeButton from "./UI/GameModeButton.tsx";
import "./Menu.css";
import { Link } from "react-router";

interface MenuProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Menu() {

  return (
    <div>
      <p className="menu-text">&gt; Choose Your Game Mode:</p>
      <div className="button-container">
        <Link to="pokemon">
          <GameModeButton text={"Pokemon"}/>
        </Link>
        
        <Link to="trainer">
          <GameModeButton text={"Trainer"}/>
        </Link>

        <Link to="cries">
          <GameModeButton text={"Cries"}/>
        </Link>

        <Link to="music">
          <GameModeButton text={"Music"}/>
        </Link>
      </div>
      {/* <form action="">
        <div style={{display: 'flex', width: '200px', flexWrap: 'wrap', gap:'5%'}}>
          <Checkbox label="Generation One" generation={1}/>
          <Checkbox label="Generation Two" generation={2}/>
          <Checkbox label="Generation Three" generation={3}/>
          <Checkbox label="Generation Four" generation={4}/>
          <Checkbox label="Generation Five" generation={5}/>
          <Checkbox label="Generation Six" generation={6}/>
          <Checkbox label="Generation Seven" generation={7}/>
          <Checkbox label="Generation Eight" generation={8}/>
          <Checkbox label="Generation Nine" generation={9}/>
          <Checkbox label="All Generations" generation={1}/>
        </div>
        <label htmlFor="silhouette">Silhouette Mode</label>
        <input type="checkbox" id="silhouette" />

      </form>
      <p>
        <button onClick={handleClick}>Start Game!</button>
      </p> */}
    </div>
  );
}