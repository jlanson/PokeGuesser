import { type ReactNode, useState } from "react";
import Menu from "./Menu.tsx";
import Game from "./Game.tsx";
import { MouseEvent } from "react";
import Header from "./Header.tsx";
import "./PokeGuesserApp.css";
import { Outlet, useLocation } from "react-router";

export default function PokeGuesserApp() {
  const [startGame, setStartGame] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  function handleClick(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setStartGame(true);
  }

  let content:ReactNode = <Menu handleClick={handleClick}/>;
  
  if (startGame){
    content = <Game />;
  }

  return (
    <>
      <div className="background-container"></div>
      {location.pathname === "/pokemon" && <div className="background-overlay"></div>}
      <Header/>
      <div className="poke-guesser">
        <Outlet />
      </div>
    </>
  );
}