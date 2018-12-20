import React from 'react'
import Style from './productView.module.css'
const ProductView = (props)=>{
    const {src,photographer,photographer_url} = props.selected;
    console.log(props.selected);
    return(
        <div className={Style.Container} onClick={()=>props.closed()}>
            <div className={Style.imageCard}>
                <span className={Style.closeBtn} onClick={()=>props.closed()}>x</span> 
                <img className={Style.image} src={src.large} alt={photographer} /> 
                <div className={Style.photographer}><h2 >{photographer}</h2></div>
                </div>
        </div>
    )
}

export default ProductView;