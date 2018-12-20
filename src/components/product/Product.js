import React from 'react'
import Classes from './Product.module.css'

const Product = (props)=>{
    const {id,photographer,src} = props.product;
    return(
        <div className={Classes.Card} key={id} onClick={()=>props.clicked({...props.product})}>
        <div className={Classes.CardBody}><img className={Classes.image} src={src.portrait} alt={photographer}/></div>
        <div className={Classes.CardFooter}>{'@' + photographer}</div>
        </div>
    )
}


export default Product