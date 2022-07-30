import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '../../api/pokeApi';
import InfoPokemon from '../../components/InfoPokemon';
import { Layout } from '../../components/Layout'

const PokemonPage = ({ pokemon }) => {

    const router = useRouter();

    // const idPoke = router.query.id;

    // console.log(pokemon)

    const { name } = pokemon;

    const imagePokemon = pokemon.sprites.other?.dream_world.front_default;
    // const num = pokemon.stats.map((e, i) => e.base_stat)
    // const skill = pokemon.stats.map((e, i) => e.stat.name)

    const stats = pokemon.stats


    return (
        <Layout namePage="Pokemón" >
            <InfoPokemon img={imagePokemon} name={name} stats={stats} />
        </Layout>
    )
}
export default PokemonPage;

{/* <h1>el id del Pokemon {name} es {idPoke}  </h1> */ }

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