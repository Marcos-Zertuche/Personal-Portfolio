import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Material UI Imports
import { Grid, Box, Typography } from "@mui/material"

//Components
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import IntroCard from "@/components/IntroCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcos Zertuche Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <Navbar />
        <Grid container backgroundColor='#02577a' spacing={5} flexGrow={1} width={'100%'}>
          <Grid item>
            <Typography>
              Hi there! Welcome to my personal portfolio 
            </Typography>
            <SocialMedia/>
          </Grid>
          <Grid item >
            <IntroCard/>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
