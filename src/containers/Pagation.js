import React from 'react';
import Styles from './pagation.module.css'
const Pagation =(props)=>{
        return(
                <div className={Styles.Pagation}>
                <button className={[Styles.button, Styles.buttonBack].join(' ')} onClick={()=>props.back()}>&lt;</button><button className={[Styles.button, Styles.buttonNext].join(' ')} onClick={()=>props.next()}>&gt;</button>
                </div>
        )

}

export default Pagation;