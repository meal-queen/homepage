import Header from './components/Header';
import Footer from './components/Footer';
import LogoNBg from './components/LogoNBg';
import Introduction from './components/AppIntroduction';
import Faculty from './components/Faculty';
import Benefits from './components/Benefits';
import Customer from './components/Customer';
import Download from './components/Download';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className=" w-screen">
      <Header />
      <Element name="logoNBg">
        <LogoNBg />
      </Element>
      <Element name="introduction">
        <Introduction />
      </Element>
      <Element name="faculty">
        <Faculty />
      </Element>
      <Element name="benefits">
        <Benefits />
      </Element>
      <Element name="customer">
        <Customer />
      </Element>
      <Element name="download">
        <Download />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
