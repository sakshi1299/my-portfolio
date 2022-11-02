import React from 'react';
import styles from "../styles/node.module.css"
export default function node(props){
    return(
        <div>
            <span className={props.border ? styles.nodeBorder :styles.node}></span>
        </div>
    )
}