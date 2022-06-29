import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Assets/CSS/Style.css';
import About from './Views/About';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Project from './Views/Project';
import { BreakSection } from './Components/BreakSection';
import SDNT from './Views/SDNT';
import Footer from './Views/Footer';

function App() {
  return (
    <diV>
      <Home />
      <About />
      <Project />
      <BreakSection />
      <SDNT />
      <Contact />
      <Footer />
    </diV>
  );
}

export default App;
