import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Advert from './components/Advert';
import About from './components/About';
import Clients from './components/Clients';
import Choose from './components/Choose';
import Call from './components/Call';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2"
import AOS from "aos"
function App() {
  AOS.init({
    offset: 320,
    duration: 1000,
  });
  return (
    <div className="App">
      <Header />
      <Advert />
      <About />
      <Clients />
      <Choose />
      <Call />
      <Services />
      <Team />
      <Contact />
     <Footer/>
     <Footer2/>
    </div>
  );
}

export default App;
