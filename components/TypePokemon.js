import React from 'react'

const TypePokemon = ({ tipo }) => {

    const validacionTipo = (tipo) => (
        tipo === 'grass' ? '#9BCC50' : tipo === 'poison' ? "#B97FC9" : tipo === 'fire' ? '#FD7D24' : tipo === 'flying' ? '#3DC7EF' : tipo === 'water' ? '#4592C4' : tipo === 'bug' ? '#729F3F' :
        tipo === 'normal' ? '#A4ACAF' : tipo === 'electric' ? '#EED535' : tipo === 'ground' ? '#F7DE3F' : tipo === 'fairy' ? '#FDB9E9' : tipo === 'fighting' ? '#D56723' : tipo === 'psychic' ? '#F366B9' : tipo === 'rock' ? '#A38C21' : tipo === 'steel' ? '#9EB7B8' : tipo === 'ice' ? '#51E4E7' : tipo === 'ghost' ? '#7B62A3' : tipo === 'dragon' ? '#53A4CF' : 'black'
    )

    const styles = {
        popup: {
            backgroundColor: validacionTipo(tipo),
            width: '80px',
            borderRadius: '3px',
            fontWeight:  'bold',
            color: 'white'
                       
        }
    };
    return (
        <div
            style={styles.popup}
        > {tipo} </div>
    )
}

export default TypePokemon