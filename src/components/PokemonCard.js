import React from "react";

const PokemonCard = ({ spriteUrl, name, types }) => {

  const capitalizedPokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  // labels all type colors
  const getTypeColor = (type) => {
    switch (type) {
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "electric":
        return "#F7D02C";
      case "grass":
        return "#7AC74C";
      case "ice":
        return "#96D9D6";
      case "fighting":
        return "#C22E28";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "flying":
        return "#A98FF3";
      case "psychic":
        return "#F95587";
      case "bug":
        return "#A6B91A";
      case "rock":
        return "#B6A136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "steel":
        return "#B7B7CE";
      case "fairy":
        return "#D685AD";
      default:
        return "#000000";
    }
  };

  // this function takes a string as the input and returns the string with the first letter capitalized. 
  const capitalizePokemonType = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="bg-white dib br3 pa5 ma5 grow bw2 shadow-5 card">
      <img src={spriteUrl} alt={capitalizedPokemonName} />
      <div>
        <h2>{capitalizedPokemonName}</h2>
        {/* maps through "types" array. If there are more than one type, a right margin of 0.5rem gets added. If there is no other type, no marginal spacing is added" */}
        <p className="b"><span>Type(s): </span> 
          {types.map((type, index) => (
            <span key={type} className="type" style={{ backgroundColor: getTypeColor(type), color: "white", padding: "0.3rem 0.5rem", marginRight: index < types.length - 1 ? "0.5rem" : 0 }}>
              {capitalizePokemonType(type)}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;