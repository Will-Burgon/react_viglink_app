import React from 'react';
import styles from './Search.module.css'

const Search = (props)=> {
return (
    <div className = {styles.search}>
        <input onKeyPress={(event)=>props.search(event)} placeholder="Search VigLink here. Press Enter."></input>
    </div>
)
}

export default Search