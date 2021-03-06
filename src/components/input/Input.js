import React from 'react';
import styles from './Input.module.css'

const Input = (props)=>{
return (
    <div className = {styles.input_wrapper}>
        <input onKeyPress={(event)=>props.getApi(event)} placeholder="Type your API Key here"></input>
        <input onKeyPress={(event)=>props.getSecret(event)} placeholder="Type your Secret Key here"></input>
    </div>
)
}

export default Input
