import React from 'react';
import styles from '../styles/path.module.css';
 
export default function path(props){
    return(
        <div style={{height : props.height, width : props.width}}>
            <span className={props.direction=="vertical" ? styles.vertical : styles.horizontal } >  </span>
        </div>
    )
}