import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const FavoritesPage = () => {
    return (
        <>
            <Layout namePage="Favorites" content="Favorites Pokemons" >
                <h1>this is Favorites Page</h1>
            </Layout>
        </>
    )
}

export default FavoritesPage