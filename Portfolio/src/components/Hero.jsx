import { Box, Typography } from "@mui/material";
import codesnippet from '../assets/images/code snippet.png'

const Hero = () => {
    return (  
        <Box className='hero'>
            <Box>
                <Typography variant="body1" sx={{ fontSize: '25px' }}>
                    Fullstack Developer
                </Typography>
                <Typography className="intro" variant='h3'>
                    Hi, I'm <span style={{ color: '#ff004f' }}> Kassim </span> 
                    <br/> <span style={{ 
                            position: 'absolute',
                            marginLeft: '10%'
                        }}>Ali from Kenya</span>
                </Typography>
            </Box>
            <img src={codesnippet} alt='code snippet' width='50%' />

        </Box>
    );
}
 
export default Hero;