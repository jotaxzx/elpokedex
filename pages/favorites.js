import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import NoFavorites from '../components/NoFavorites'
import localFavorites from '../utils/localFavorites'
import CardPoke from '../components/CardPoke'
import { pokeApi } from '../api/pokeApi'

const FavoritesPage = () => {

    const [favoritePokemons, setfavoritePokemons] = useState([]);

    useEffect(() => {
        setfavoritePokemons(localFavorites.pokemons())
        
    }, []);


    return (
        <>
            <Layout namePage="Favorites" content="Favorites Pokemons" >
                {favoritePokemons.length === 0 ?

                    <NoFavorites />
                    :
                    <div style={{ display: 'flex', height: 'calc(100vh - 100px)' }} >
                    {
                        favoritePokemons.map(e => (
                            <CardPoke key={e}  id={e} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e}.svg`}  /> 
                        ))
                    }
                </div>
                }
            </Layout>
        </>
    )
}

export default FavoritesPage