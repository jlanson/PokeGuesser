import { type ReactNode, useState } from "react";
import Menu from "./Menu.tsx";
import Game from "./Game.tsx";

export default function PokeGuesserApp() {
  const [startGame, setStartGame] = useState(false);

  function handleClick(){
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