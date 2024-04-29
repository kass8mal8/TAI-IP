import { Box, Stack, Typography } from "@mui/material";
import me from "../assets/images/me.jpg"
import { useState } from "react";

const About = () => {
    // const tabLinks = document.getElementsByClassName('tab-links')
    // const tabContents = document.getElementsByClassName('tab-contents')

    // const handleTabOpen = (tabName) => {
    //     for(let tabLink of tabLinks) {
    //         tabLink.classList.remove('active-link')
    //     }
    //     for(let tabContent of tabContents) {
    //         tabContent.classList.remove('active-tab')
    //     }
    //     e.target.classList.add('active-link')
    // }

    const [isSkill, setIsSkill] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isExperience, setIsExperience] = useState(false)

    const handleTabOpen = (tabName) => {
        if(tabName === 'skills') {
            setIsSkill(true)
            setIsEducation(false)
            setIsExperience(false)
        }
        if(tabName === 'education') {
            setIsEducation(true)
            setIsSkill(true)
            setIsExperience(false)
        }
        if(tabName === 'experience') {
            setIsExperience(true)
            setIsEducation(false)
            setIsSkill(true)
        }
    }

    return (  
        <Box className='about' >
            <img src={me} alt="me" width='40%' />
            <Stack className="about-box">
                <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    About me
                </Typography>
                <Typography sx={{ marginTop: '30px' }}>
                    I'm a graduate in Bsc. IT and have experience in both front-end and backend development.<br/> My previous roles as a freelancer enabled me develop strong skills in the related field.
                </Typography>

                <Stack className='tab-titles' direction='row' spacing={2}>
                    <Typography 
                        className={`tab-links ${!isSkill ? 'active-link' : ''}`} 
                        onClick={() => handleTabOpen('skills')} 
                    >Skills
                    </Typography>
                    <Typography 
                        className={`tab-links ${isExperience ? 'active-link' : ''}` }
                        onClick={() => handleTabOpen('experience')}
                    >Experience
                    </Typography>
                    <Typography 
                        className={`tab-links ${isEducation ? 'active-link' : ''}`} 
                        onClick={() => handleTabOpen('education')}
                    >Education
                    </Typography>
                </Stack>

                <Box className={`tab-contents ${!isSkill ? 'active-tab' : ''}`}>
                    <ul>
                        <li>
                            <span> Frontend Development </span>
                            <br/>ReactJs<br/>HTML<br/>Sass
                        </li>
                        <li>
                            <span> Backend Development</span>
                            <br/>NodeJs<br/>ExpressJs<br/>Django
                        </li>
                    </ul>
                </Box>

                <Box className='tab-contents'>
                    <ul>
                        <li>
                            <span> Freelancer </span>
                            <br/>Developed web apps and backend applictaions as a freelancer.
                        </li>
                        <li>
                            <span> App Development</span>
                            <br/>Building android apps 
                        </li>
                    </ul>
                </Box>
            </Stack>
        </Box>
    );
}
 
export default About;