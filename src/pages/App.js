import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import Contact from './components/Contact';

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
