import { FormEvent, type ReactNode, useState } from "react";
import Menu from "./Menu.tsx";
import Game from "./Game.tsx";
import { MouseEvent } from "react";

export default function PokeGuesserApp() {
  const [startGame, setStartGame] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setStartGame(true);
  }

  let content:ReactNode = <Menu handleClick={handleClick}/>;
  
  if (startGame){
    content = <Game />;
  }

  return (
    <div>
      {content}
    </div>
  );
}