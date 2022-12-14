import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { Path, NavBar, Node, About, CustButton, Work } from '../components';
import styles from "../styles/Home.module.css";
import { Inter, Roboto_Mono } from '@next/font/google'
import { Container, Button } from '@mui/material';
import work from "../utils/work.json";

const inter = Inter()
const robotoMono = Roboto_Mono();

export default function Home() {

  const [currProject, setCurrProject] = useState(0);

  function handleChange(value) {
    setCurrProject(value)
  }
  return (
    <Container>
      <Head>
        <title>Sakshi Kshatriya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        {/* above nav bar */}
        <div className={styles.pathAboveNavBar}>
          <Path direction={"vertical"} height={"90px"} width={"0px"}></Path>
          <span className={styles.modeSwitch}></span>
          <Path direction={"vertical"} height={"50px"} width={"0px"}></Path>
        </div>
        {/* above nav bar */}

        {/* nav bar */}
        <NavBar />
        {/* nav bar */}

        {/* header */}
        <div className={`${styles.header}  ${inter.className}`}>
          <h1 className={styles.name}>Sakshi Kshatriya</h1>
          <p className={styles.jobTitle}>Full Stack Developer @Boeing</p>

          <p className={styles.aboutMe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Felis sit sollicitudin fusce diam eu duis nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Felis sit sollicitudin fusce diam eu duis nibh.
          </p>
        </div>
        {/* header */}

        <Button variant="outlined" className={styles.button}> download my resume</Button>

        {/* path above about section */}
        <div className={styles.pathAboveNavBar}>
          <Path direction={"vertical"} height={"65px"} width={"0px"}></Path>
          <Node border={false} />
          <Path direction={"vertical"} height={"65px"} width={"0px"}></Path>
          <Node border={true} />
        </div>
        {/* path above about section */}

        {/* About section */}
        <section id="About" className={styles.aboutSection}>
          <h3 className={`${styles.sectionHeading}  ${robotoMono.className}`}>About</h3>
          <About />
        </section>
        {/* About section */}

        {/* path above work section */}
        <Path direction={"vertical"} height={"65px"} width={"0px"}></Path>
        <div className={styles.pathBelowAbout}>
          <div className={styles.horizontalPath}>
            <Path className={styles.horizontalPath} direction={"horizontal"} height={"0px"} width={"50%"}></Path>
            <Node border={false} />
            <Path className={styles.horizontalPath} direction={"horizontal"} height={"0px"} width={"50%"}></Path>
          </div>
          <Path direction={"vertical"} height={"105px"} width={"0px"}></Path>
          <Node border={true} />
        </div>
        {/* path above work section */}

        {/* Work Section */}
        <section id="About" className={styles.workSection}>
          <div className={styles.buttons}>
            <h3 className={`${styles.sectionHeadingLeft}  ${robotoMono.className} `}>Work</h3>
            {
              work.map((project, i) => {
                return (
                  <CustButton key={i} project={project} index={i} handleChange={handleChange} currProject={currProject} />
                )
              })
            }
          </div>
          <Work index={currProject} />

        </section>
        {/* Work Section */}
      </div>
    </Container>
  )
}
