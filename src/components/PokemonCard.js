import React from "react";

const PokemonCard = ({ spriteUrl, name, types }) => {

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="bg-white dib br3 pa5 ma5 grow bw2 shadow-5">
      <img src={spriteUrl} alt={capitalizedName} />
      <div>
        <h2>{capitalizedName}</h2>
        <p><span className="b">Type(s):</span> {types.join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonCard;