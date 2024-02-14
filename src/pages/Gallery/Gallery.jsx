import React, { useState, useEffect } from "react";
import './Gallery.css';
import Header from "../../components/Header/Header.jsx";

export default function Gallery() {
    const [statePokeInfo, setStatePokeInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36", { mode: "cors" });
            const allPokemon = await response.json();

            const promises = allPokemon.results.map(async (pokemon) => {
                const response = await fetch(pokemon.url, { mode: "cors" });
                const pokemonInfo = await response.json();

                return {
                    pokePic: pokemonInfo.sprites.other.dream_world.front_default,
                    pokeKey: pokemonInfo.id,
                };
            });

            const pokemonInfoList = await Promise.all(promises);
            setStatePokeInfo(pokemonInfoList);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Header/>
            <div className="flex-col items-center justify-center w-screen md:px-40">
                <div className="p-1 m-5 border-y-2 border-black flex mx-auto items-center justify-center">
                    <h1 className="text-center font-bold text-7xl">GALLERY</h1>
                </div>
            </div>
            <div className="page-container">
                {loading && (
                    <div className="preloader">
                        <div className="preloader-img"></div>
                    </div>
                )}

                <div className="page-content">
                    <div className="grid grid-cols-3 gap-4">
                        {statePokeInfo.map((info) => (
                            <div key={info.pokeKey} className="flex justify-center items-center">
                                <img src={info.pokePic} alt="No image available" className="rounded-lg"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

