// Modules imports
import React from "react";
import { useQuery } from "@apollo/react-hooks";

// Local Imports
import { Pokemon } from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          // each time you loop a component pass a key
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}
