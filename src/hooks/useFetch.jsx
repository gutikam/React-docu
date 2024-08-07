import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let json = await response.json();

                let pokemonPromises = json.results.map(async (el) => {
                    try {
                        let pokemonResponse = await fetch(el.url);
                        if (!pokemonResponse.ok) {
                            throw new Error('Network response was not ok');
                        }
                        let pokemonJson = await pokemonResponse.json();
                        return {
                            id: pokemonJson.id,
                            name: pokemonJson.name,
                            avatar: pokemonJson.sprites.front_default,
                        };
                    } catch (error) {
                        setError(error.message);
                        return null;
                    }
                });

                let pokemonResults = await Promise.all(pokemonPromises);
                setPokemons(pokemonResults.filter(pokemon => pokemon !== null));
                setData(pokemonResults);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        };

        getData();
    }, [url]);

    return {
        data,
        isPending,
        error,
        pokemons
    };
};



