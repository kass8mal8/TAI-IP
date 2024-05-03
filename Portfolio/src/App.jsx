import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
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
        <Services />
        <Contact />
      </Box>
  );
}
 
export default App;