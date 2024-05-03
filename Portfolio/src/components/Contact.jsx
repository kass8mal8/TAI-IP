import { EmailOutlined, Facebook, LinkedIn, Phone, Send, X } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Form } from "./Form";
import { Link } from "react-router-dom";

const Contact = () => {
    return (  
        <Stack 
            direction='row' 
            spacing={2} 
            className='contact'
        >
            <Box>
                <Typography variant='h4' fontWeight='bold' my={4}>Contact me</Typography>
                <Stack direction='row' spacing={2} alignItems='center' my={1}>
                    {/* <Send size='small' /> */}
                    <EmailOutlined sx={{ color: '#ff004f' }} />
                    <Typography> kassimaly21@gmail.com </Typography>
                </Stack>
                <Stack direction='row' spacing={2} alignItems='center' my={2} >
                    <Phone sx={{ color: '#ff004f' }} />
                    <Typography> 254114369825 </Typography>
                </Stack>

                <Stack direction='row' spacing={2} my={3}>
                    <Link to='/x.com'>
                        <X className='social-icons' /> 
                    </Link>
                    <Link to='linkedin.com/kassim-ali'>
                        <LinkedIn className='social-icons' /> 
                    </Link>
                    <Link to='facebook.com'>
                        <Facebook className='social-icons' /> 
                    </Link>
                    
                </Stack>
            </Box>

            <Form />
        </Stack>
    );
}
 
export default Contact;