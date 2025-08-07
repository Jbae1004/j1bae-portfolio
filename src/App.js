import { NavBar } from './components/Navbar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
