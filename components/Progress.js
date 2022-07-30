import { useState } from 'react';
import style from '../styles/Progress.module.css'

const Progress = ({ num }) => {
    const [styles, setStyles] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 20,
            width: `${num}%`
        }

        setStyles(newStyle);
    }, 200);

    

    return (

        <div className={style.progress}>

            <div className={style.progressdone} style={styles}>
                {num}%
            </div>
        </div>
    )
}

export default Progress;