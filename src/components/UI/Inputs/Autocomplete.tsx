import { useEffect, useState } from "react";
import './Autocomplete.css';
import { Pokemon } from "../../Game";
import { useSelector } from "react-redux";
import { RootState } from "../../../App";

interface AutocompleteProps {
    pokemon: Pokemon;
    removePokemon: () => void;
}

export default function Autocomplete({pokemon, removePokemon} : AutocompleteProps){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [counter, setCounter] = useState<number>(0);
    const {pokemonPool} = useSelector((state: RootState) => state.gameState)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setShowSuggestions(true);
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(searchTerm){
          const guess = searchTerm.toLowerCase();
          if(guess === pokemon.name.toLowerCase()){
            alert('Correct!');
            setCounter(prev => prev + 1);
            removePokemon();
          } else {
            alert('Incorrect!');
          } 
        }
        setShowSuggestions(false);
    }

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setSearchTerm(e.currentTarget.innerText);
        setShowSuggestions(false);
    }
    
    useEffect(() => {
        const results = pokemonPool.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="autocomplete">
            <input className="autocomplete-input"
                type="text"
                placeholder="Guess a Pokemon..."
                value={searchTerm}
                onChange={handleChange}
            />
            {showSuggestions && <ul className="suggestions">
                {searchResults.map(item => (
                <li key={item.id} onClick={handleClick}>{item.name}</li>
                ))}
            </ul>}
            <p>
                <button onClick={handleButtonClick}>Submit</button>
            </p>
            <div>Score: {counter}</div>
        </div>
    );
}