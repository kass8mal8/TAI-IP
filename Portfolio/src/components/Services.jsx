import { AdbRounded, Api, CodeRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const Services = () => {
    return (  
        <Box>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>My Services</Typography>
            <Stack direction='row' justifyContent='space-between' spacing={4} mt={2}>
                <Box className='service-card'>
                    <CodeRounded className="card-icon"/>
                    <Typography variant='h5'>Web Development</Typography>
                    <Typography sx={{fontSize: '13px', mt: 1}}>Utilized react's declarative approach to building interfaces therefore creating scalable and maintanable web applictaions.</Typography>
                </Box>
                <Box className='service-card'>
                    <AdbRounded className="card-icon"/>
                    <Typography variant='h5'>Android Development</Typography>
                    <Typography sx={{fontSize: '13px', mt:1}}>Created interactive and visually appealing android apps using react native's rich set of UI components and libraries</Typography>
                </Box>

                <Box className='service-card'>
                    <Api className="card-icon"/>
                    <Typography variant='h5'>Backend Development</Typography>
                    <Typography sx={{fontSize: '13px', mt:1}}>Utilized nodejs non-blocking I/O model and its event-driven to handle concurrent connections in servers.</Typography>
                </Box>
            </Stack>
        </Box>
    );
}
 
export default Services;