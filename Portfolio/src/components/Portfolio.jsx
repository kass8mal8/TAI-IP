import { Box, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";
import tms from '../assets/images/dashboardShot.png'
import snippet from '../assets/images/code snippet.png'
import swiftcart from '../assets/images/swiftcart.jpg'

const Portfolio = () => {
    const itemData = [
        {
            img: swiftcart,
            title: 'Online Store'
        },
        {
            img: tms,
            title: 'Tenant Management System'
        },
        {
            img: snippet,
            title: "Code snippet"
        },
        {
            img: snippet,
            title: 'Online Store'
        },
        {
            img: swiftcart,
            title: 'Online Store'
        },
    ]
    return (  
        <Box my={5}>
            <Typography variant='h3' mb={2}>My work</Typography>
            <Box sx={{width: '70%',overflowY: 'scroll'}}>
                <ImageList variant="masonry" gap={8}>
                    {
                        itemData.map( item => (
                            <ImageListItem key={item.img}>
                                <img src={item.img} />
                                <ImageListItemBar title={item.title} />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </Box>
    );
}
 
export default Portfolio;