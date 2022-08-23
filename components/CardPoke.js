import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import style from '../styles/Card.module.css'
import TypePokemon from './TypePokemon';

const CardPoke = ({ id, name, img, url }) => {

    const router = useRouter();

    const [pokemon, setPokemon] = useState({});

    const capitalize = (name) => name?.charAt(0).toUpperCase() + name?.slice(1);

    const onClick = () => {
        router.push(`/pokemon/${id}`)
    }


    const api = async () => {
       if (url) {
           const { data } = await axios.get(url)
           setPokemon(data)
       }

    }

    useEffect(() => {
        api()
    }, []);

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

export default CardPoke;





