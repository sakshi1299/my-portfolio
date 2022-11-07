import React, { useState } from 'react';
import styles from "../styles/about.module.css";
import data from "../utils/about.json";
import { Inter, Roboto_Mono } from '@next/font/google'

const inter = Inter();
const robotoMono = Roboto_Mono();


export default function About() {
    const [company, setCompany] = useState(0);
    return (
        <div className={styles.main}>
            <div className={styles.titleBar}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
            </div>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <div className={styles.emptySpace}></div>
                    {

                        data.map((job, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`${styles.companyName}  ${inter.className} ${company == i && styles.active}`}
                                    onClick={(e) => setCompany(i)}
                                >
                                    {job.companyName}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.contentDesc}>
                    <div className={styles.companyLogo}>
                    </div>
                    <h3 className={`${styles.jobTitle} ${inter.className}`}>
                        {data[company].jobTitle} at {data[company].companyName}
                    </h3>
                    <p className={`${styles.tenure} ${robotoMono.className}`}>
                        {data[company].tenure}
                    </p>
                    <p className={`${styles.description} ${inter.className}`}>
                        {data[company].description1}
                    </p>
                    <p className={`${styles.description} ${inter.className}`}>
                        {data[company].description2}
                    </p>
                    <p className={`${styles.description} ${inter.className}`}>
                        {data[company].description3}
                    </p>
                </div>
            </div>

        </div>
    )
}