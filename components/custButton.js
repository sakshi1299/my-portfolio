import React, { useState } from 'react';
import styles from "../styles/button.module.css";
import data from "../utils/about.json";
import { Inter, Roboto_Mono } from '@next/font/google'

const inter = Inter();
const robotoMono = Roboto_Mono();

export default function CustButton(props) {
return(
    <div 
            onClick={(e)=>props.handleChange(props.index)} 
            className={`${styles.button}  ${robotoMono.className} ${props.index === props.currProject && styles.active}`}
    >
            {props.project.title}
    </div>
)
}