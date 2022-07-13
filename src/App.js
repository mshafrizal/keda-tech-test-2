import logo from './assets/logo.png';
import metricLogo from './assets/undraw_data_re_80ws.svg';
import './App.css';
import AboutSection from './components/about/About.js';
import PricingSection from './components/pricing/Pricing.js';
import ContactSection from './components/contact/Contact.js';
function App() {
  return (
    <div className="flex flex-col relative">
      <header className="flex justify-between px-5 py-5">
        <div className="flex items-center">
          <a href="/">
            <img className="logo mr-4" src={logo} />
          </a>
          <a className="hidden md:block text-xl font-bold mx-10 hover:underline" href="#">
            Home
          </a>
        </div>
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex grow">
            <li>
              <a className="text-xl font-bold md:mx-5 lg:mx-10 hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-xl font-bold md:mx-5 lg:mx-10 hover:underline" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-xl font-bold md:mx-5 lg:mx-10 hover:underline" href="#about">
                Contact
              </a>
            </li>
          </ul>
          <button className="border border-sky-500 border-2 rounded shadow-sm bg-white py-2 px-10 text-sky-500">
            Login
          </button>
        </div>
      </header>
      <section
        id="cta"
        className="container mx-auto flex flex-col my-20 relative justify-center items-center"
      >
        <h1 className="text-5xl font-bold text-center mt-10">Keda ERP</h1>
        <p className="text-xl text-center mt-3">
          Discover how enterprise resource planning (ERP) software can help you perfect your growth
          plans
        </p>
        <button className="bg-sky-500 mt-5 text-white py-2 px-10 rounded-md hover:bg-sky-400">
          Talk to Our Agent
        </button>
        <img className="mt-10 metric-logo" src={metricLogo}></img>
      </section>
      <AboutSection></AboutSection>
      <PricingSection></PricingSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
