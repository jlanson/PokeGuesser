import { useState } from "react";

export default function PokeGuesserApp() {
  const [startGame, setStartGame] = useState(false);

  function handleClick(){
    setStartGame(true);
  }

  return (
    <div>

    </div>
  );
}