import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


//Material UI Components Used
import { Grid, Box, Button, Link, Typography } from "@mui/material"

//Icons from Material UI Icons
import GitHubIcon from '@mui/icons-material/Github'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'


import { SocialMediaLinks } from "@/data/SocialMediaLinks";



export default function SocialMedia() {
    return (
        <>
            <Grid container justifyContent="center">
                <Typography> Connect with me on: </Typography>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item marginInline={'20px'}>
                    <Link href={SocialMediaLinks.GitHub} target="_blank"> <GitHubIcon /> </Link>
                </Grid>
                <Grid item marginInline={'20px'}>
                    <Link href={SocialMediaLinks.Instagram} target="_blank"> <InstagramIcon /> </Link>       
                </Grid>
                <Grid item marginInline={'20px'}>
                    <Link href={SocialMediaLinks.LinkedIn} target="_blank"> <LinkedInIcon /></Link> 
                </Grid>
            </Grid>
        </>
    );
}
