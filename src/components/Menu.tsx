interface MenuProps {
  handleClick: () => void;
}

export default function Menu({handleClick}: MenuProps) {
  return (
    <div>
      <h1>PokeGuesser</h1>
      <p>
        <button onClick={handleClick}>Start Game!</button>
      </p>
    </div>
  );
}