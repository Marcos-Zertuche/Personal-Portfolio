import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


//Material UI Components Used
import { Grid, Box, Button, Link, Typography } from "@mui/material"





export default function IntroCard() {
    return (
        <>
            <Grid container justifyContent="center">
                <Typography> About Me: </Typography>
            </Grid>
            <Grid container spacing={2} justifyContent="center" margin={'20px'}>
                <Typography>
                    My name is Marcos Zertuche and I am a senior majoring in Computer Science and Data Science, with a specialization in Artificial Intelligence and Machine Learning at Southern Methodist University (SMU). I have a passion for all things technology, and enjoy spending time learning different skills in tech across various domains. 
                    
                    I have worked on various projects, but a majority of my technical experiences have been in <Link href="/ml-projects"> Machine Learning </Link> and <Link href="/se-projects"> Software Engineering </Link> based projects. 

                    Outside of school, I am a huge fan of all Dallas sports, but I am most interested in Baseball and Soccer (European Leagues mostly). I also collect Baseball Jerseys and am in the process of visiting all 30 MLB stadiums. 

                    Some other activities I enjoy include building Legos, playing soccer with friends, and trying new foods around Dallas!

                </Typography>
            </Grid>
        </>
    );
}
