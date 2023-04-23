import React from 'react';
import styles from '../styles/navBar.module.css';
import { Roboto_Mono } from '@next/font/google';
import {GiHamburgerMenu} from 'react-icons/gi'
const robotoMono = Roboto_Mono();
export default function navBar(props){
    const tabs = [
        {
            "name" : "Experience",
            "section" : "#Experience"
        },
        {
            "name" : "Work",
            "section" : "#Work"
        },
        {
            "name" : "Blog",
            "section" : "#Blog"
        },
        {
            "name" : "Contact",
            "section" : "#Contact"
        }
    ]
    return(
        <>
        <div className={styles.navBar}>
            {
                tabs.map((item , index)=>{
                    return(
                        <p onClick={(e)=>props.handleChange(item.name)}  key={index} className={`${robotoMono.className}  ${styles.navItems}`}>{item.name}</p>             
                    )
                    
                })
            }
        </div>
        <div className={styles.respNavBar}>
            <div></div>
                <GiHamburgerMenu className={styles.hamburgerMenu}/>
        </div>
        </>
    )
}