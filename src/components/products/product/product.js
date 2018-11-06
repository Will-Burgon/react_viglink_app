import React from 'react';
import styles from './product.module.css'

const Product = (props)=>{
return (
    <div>
        <li className={styles.grid}>
           <p>{props.name}</p> 
           <p>{props.price}</p> 
            <a href={props.url} target="_blank" rel="noopener noreferrer">Link</a>
            <p>{props.merchant}</p>
            <img src= {props.img} alt={props.name}></img>
        </li>
    </div>
)
}

export default Product