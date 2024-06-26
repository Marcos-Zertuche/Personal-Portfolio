import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Navbar from "@/components/Navbar";

export default function Experiences() {
    return (
      <>
        <Head>
          <title>Experiences</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main className={`${styles.main}`}>
            Experience Info on this page
          
        </main>
      </>
    );
  }