import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import { pokeApi } from '../api/pokeApi';
import style from '../styles/Card.module.css'
import TypePokemon from './TypePokemon';

const CardFavorite = ({ id, img }) => {

    const router = useRouter();

    const [pokemon, setPokemon] = useState({});

    const capitalize = (name) => name?.charAt(0).toUpperCase() + name?.slice(1);

    const onClick = () => {
        router.push(`/name/${pokemon.name}`)
    }


    const api = async () => {
       if (id) {
           const { data } = await pokeApi.get(`/pokemon/${id}`)
           console.log(data);
           setPokemon(data)
       }

    }

    useEffect(() => {
        api()
    }, []);

    // console.log(pokemon);

    const name = pokemon?.name
    const type = pokemon?.types

    
    const tipos = type?.map(e => e.type.name)
    // console.log(tipos)
    return (
        <div className={style.abox}
            onClick={onClick}

        >
            <div className={style.imgcontainer}>
                <div className={style.imginner}>
                    <div className={style.innerskew}>
                        <img src={img} />
                    </div>
                </div>
            </div>
            <div className={style.textcontainer}>
                <h3> #{id} { !name  ? '' : capitalize(name)}</h3>
                {
                     tipos == undefined ? '...Loading' : tipos.length == 2 ? 
                         <>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }} >

                                <TypePokemon tipo={tipos[0]} />
                                {/* <div>
                                    {tipos[0]}
                                </div>

                                <div>
                                    {tipos[1]}
                                </div> */}
                                 <TypePokemon tipo={tipos[1]} />
                            </div>
                        </>
                        :
                         <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TypePokemon tipo={tipos[0]} />

                         </div>
                        
                }
            </div>
        </div>
    )
}

export default CardFavorite;





