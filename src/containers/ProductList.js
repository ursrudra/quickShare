import React from 'react'
import Product from '../components/product/Product';


const ProductList = props => {
    const products = props.products;
    
    return (
            products.map(product => {
            return (<Product key={product.id} product={product} clicked={props.clicked}/>)
        }
        )
    )
}

export default ProductList