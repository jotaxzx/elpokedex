import React, { useEffect, useState } from 'react'
import favorites from '../utils/localFavorites';

const NoFavorites = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }} >
            <h1>no favorite pokemons</h1>
        </div>
    )
}

export default NoFavorites