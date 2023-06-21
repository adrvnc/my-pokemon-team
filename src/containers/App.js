import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

// declares app component and state variables
const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  // fetching pokemon data with useEffect 
  useEffect(() => {
    const fetchData = async () => {
      const pokemonNames = ["lucario", "dialga", "palkia", "arcanine", "pidgeot", "heatran"];
      const pokemonDataArray = await Promise.all(
        pokemonNames.map(async (name) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await response.json();
          return {
            name: data.name,
            spriteUrl: data.sprites.front_default,
            types: data.types.map((typeObject) => typeObject.type.name),
          };
        })
      );
      setPokemonData(pokemonDataArray);
    }
    fetchData();
  }, []);

  // Rendering components 
  return (
    <div className="tc">
      <h1 className="header-font-weight">My Pokémon Team</h1>
      <ErrorBoundary>
        <div className="grid-container">
            {pokemonData.map((pokemon) => (
              <div className="grid-item"  key={pokemon.name}>
                <PokemonCard
                  spriteUrl={pokemon.spriteUrl}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </div>
            ))}
          </div>
      </ErrorBoundary>
    </div>
  );
} 

export default App;





