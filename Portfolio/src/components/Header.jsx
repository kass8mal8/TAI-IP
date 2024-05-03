import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    console.log('Header.jsx component')
    return (  
        <Stack className='header' direction='row'>
            <Typography variant='h4' sx={{fontWeight: 600, flex: 1 }}>
                <span style={{ color: '#ff004f', fontWeight: 'bolder' }}>K</span>assim.
            </Typography>

            <ul>
                <li>
                    <Link to='#'> Home </Link>
                </li>
                <li>
                    <Link to='#'> About </Link>
                </li>
                <li>
                    <Link to='#'> Services </Link>
                </li>
                <li>
                    <Link to='#'> Portfolio </Link>
                </li>
                <li>
                    <Link to='#'> Contact </Link>
                </li>
            </ul>
        </Stack>
    );
}
 
export default Header;