/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.handledAddToCart);
    const { img, name, seller, price, ratings } = props.product;
    const handledAddToCart = props.handledAddToCart;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button onClick={ () => handledAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
            {/* <button onClick={handledAddToCart(props.product)} className='btn-cart'>Add to Cart</button> */}
        </div>
    );
};

export default Product;