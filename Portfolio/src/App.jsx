import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import './styles/css/app.css'
import './styles/css/app.css'
import { Box } from "@mui/material";

const App = () => {
  return (  
      <Box className='container'>
        <Box id='home'>
          <Header />
          <Hero />
        </Box>
        <About />
      </Box>
  );
}
 
export default App;