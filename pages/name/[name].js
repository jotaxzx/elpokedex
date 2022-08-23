import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { pokeApi } from '../../api/pokeApi';
import InfoPokemon from '../../components/InfoPokemon';
import { Layout } from '../../components/Layout'
import style from '../../styles/InfoPokemon.module.css';
import localFavorites from '../../utils/localFavorites';

const PokemonPageByName = ({ pokemon }) => {

    console.log(pokemon)
    // const idPoke = router.query.id;
    const router = useRouter();
    const { name } = pokemon;
    const imagePokemon = pokemon.sprites.other?.dream_world.front_default;
    const stats = pokemon.stats
    const {id} = pokemon;
    const pokeInfo = {
        name,
        imagePokemon,
        id,
        stats
    }
    const [inFavorites, setInFavorites] = useState(localFavorites.existInFavorites(id));

    
    const handleClick = (name) => {
        
     localFavorites.localStorageFavorite(id)
     setInFavorites(!inFavorites)
       
    }

    return (
        // namePage={name}
        <Layout >
            <div className={style.container_button}>    
                <button onClick={()=> handleClick(name)} className={style.button} >
                    {inFavorites ? 'in favorites' : 'save to favorites' }
                </button>
            </div>
            <InfoPokemon img={imagePokemon} name={name} stats={stats} />
           
        </Layout>
    )
}

export default PokemonPageByName;

export const getStaticPaths = async (ctx) => {

    // const pokemons151 = [...Array(151)].map((e, i) => `${i + 1}`);
    const { data } = await pokeApi.get('/pokemon?limit=151')
    const pokeNames = data.results.map(pokemon => pokemon.name )
   

    return {
        paths: pokeNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    // aqui desde el contexto(ctx) puedo recuperar el params de mi staticpath
    const { name } = params;
    const { data } = await pokeApi.get(`/pokemon/${name}`)

    // const pokemons = data

    return {
        props: {
            pokemon: data
        }
    }
}