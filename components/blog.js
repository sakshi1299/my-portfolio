import React, { useState } from 'react';
import styles from "../styles/blog.module.css";
import data from "../utils/blogs.json";
import { Inter, Roboto_Mono } from '@next/font/google'


const inter = Inter();
const robotoMono = Roboto_Mono();

export default function CustButton(props) {
return(
    <>
    <div className={styles.blogDiv}>
        <div className={styles.blogImageBackground}></div>
        <div className={styles.blogImage}></div>
    </div>
    <p className={`${styles.blogTtitle} ${inter.className}`}>{props.blog.title}</p>
    </>
)
}