import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Divider,
    Link,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    MenuItem,
    Menu
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'; //Home
import WorkIcon from '@mui/icons-material/Work'; //Experiences
import PersonIcon from '@mui/icons-material/Person'; // About
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; //Machine Learning 
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code'; // Software Engineering
import DescriptionIcon from '@mui/icons-material/Description'; // Resume

import { NavbarItems } from '@/data/NavbarItems';


export default function Navbar() {
    return (
        <AppBar
            style={{ width: '100%', background: '#02a9f7', position:'fixed' }}
        >
            <Toolbar justifyContent={'flex-end'}>
                <Divider />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link href='/'>
                        <Button key={"Home"} sx={{ color: '#fff' }} >
                            <HomeIcon sx={{ marginRight: '5px' }} /> Home
                        </Button>
                    </Link>
                    <Link href='/experience'>
                        <Button key="Experience" sx={{ color: '#fff' }} >
                            <WorkIcon sx={{ marginRight: '5px' }} />Experience
                        </Button>
                    </Link>
                    <Link href="/ml-projects">
                        <Button key="Machine Learning" sx={{ color: '#fff' }} >
                            <SettingsSuggestIcon sx={{ marginRight: '5px' }} /> Machine Learning
                        </Button>
                    </Link>
                    <Link href="/se-projects">
                        <Button key="SE Projects" sx={{ color: '#fff' }} >
                            <CodeIcon sx={{ marginRight: '5px' }} /> Software Engineering
                        </Button>
                    </Link>
                    <Link href="/resume">
                        <Button key="Resume" sx={{ color: '#fff' }} >
                            <DescriptionIcon sx={{ marginRight: '5px' }} />Resume
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button key="About" sx={{ color: '#fff' }} >
                            <PersonIcon sx={{ marginRight: '5px' }} />About
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    )

}