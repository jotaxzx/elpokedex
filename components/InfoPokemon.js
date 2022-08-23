import Image from 'next/image';
import style from '../styles/InfoPokemon.module.css'
import 'animate.css';
import Progress from './Progress';


const InfoPokemon = ({ img, name, stats }) => {


    return (
        <>
            <div className={style.containerimg} >
                <Image className="animate__animated animate__backInLeft" src={img} width={300} height={300} />
                <h1 className="animate__animated animate__backInLeft" style={{ fontWeight: 'bold', color: 'white' }} > Hi, my name is {name} </h1>

            </div>

            <div className={style.containerinfo}>
                <h1 style={{ fontWeight: 'bold', color: 'white' }} >My skills</h1>
                {
                    stats.map((stat, key) => (

                        <div key={key}  >
                            <strong style={{ fontWeight: 'bold', color: 'white' }} >{stat.stat.name}</strong>
                            <Progress num={stat.base_stat} />
                        </div>


                    ))
                }

            </div>


        </>
    )
}

export default InfoPokemon