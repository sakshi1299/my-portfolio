import React from 'react';
import styles from "../styles/work.module.css";
import { Inter, Roboto_Mono } from '@next/font/google'
import work from "../utils/work.json"
const inter = Inter();
const robotoMono = Roboto_Mono();


export default function Work(props) {
    return(
        <div className={styles.main}>
            <div className={`${styles.titleBar} ${robotoMono.className}`}>
               {work[props.index].url}
            </div>
            <div className={styles.content}>
                <div className={styles.projectDetails}>
                    <h3 className={`${styles.projectTitle} ${inter.className}`}>{work[props.index].title}</h3>
                    <p className={`${styles.projectDesc} ${inter.className}`}>{work[props.index].description}</p>
                    <p className={`${styles.git} ${robotoMono.className}`}>View Code</p>
                </div>
                <div className={styles.projectimage}>
                    {/* <img src={work[props.index].image}></img> */}
                </div>
             
            </div>
        </div>
    )
}