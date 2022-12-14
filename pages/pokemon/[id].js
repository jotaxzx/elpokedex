import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { pokeApi } from '../../api/pokeApi';
import InfoPokemon from '../../components/InfoPokemon';
import { Layout } from '../../components/Layout'
import style from '../../styles/InfoPokemon.module.css';
import localFavorites from '../../utils/localFavorites';

const PokemonPage = ({ pokemon }) => {

    // const idPoke = router.query.id;
    const router = useRouter();
    const { name } = pokemon;
    const imagePokemon = pokemon.sprites.other?.dream_world.front_default;
    const stats = pokemon.stats
    const {id} = pokemon;
    const [inFavorites, setInFavorites] = useState(localFavorites.existInFavorites(id));

    const handleClick = (id) => {
        
     localFavorites.localStorageFavorite(id)
     setInFavorites(!inFavorites)
       
    }

    return (
        <Layout namePage={name} >
            <div className={style.container_button}>    
                <button onClick={()=> handleClick(id)} className={style.button} >
                    {inFavorites ? 'in favorites' : 'save to favorites' }
                </button>
            </div>
            <InfoPokemon img={imagePokemon} name={name} stats={stats} />
        </Layout>
    )
}

export default PokemonPage;

export const getStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((e, i) => `${i + 1}`);
   

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    // aqui desde el contexto(ctx) puedo recuperar el params de mi staticpath
    const { id } = params;
    const { data } = await pokeApi.get(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}