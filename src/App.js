import logo from './assets/logo.png';
import metricLogo from './assets/undraw_data_re_80ws.svg';
import './App.css';
import AboutSection from './components/about/About.js';
import PricingSection from './components/pricing/Pricing.js';
import ContactSection from './components/contact/Contact.js';
import { useState } from 'react';
function App() {
  const [dialog, setDialog] = useState(false);

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
          <button
            onClick={() => setDialog(true)}
            className="border border-sky-500 border-2 rounded shadow-sm bg-white py-2 px-10 text-sky-500"
          >
            Login
          </button>
          <div className="hidden md:hidden ml-3">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-sky-500 border border-2 border-sky-500 hover:bg-sky-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-400 font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      {dialog && (
        <div
          onClick={() => setDialog(false)}
          className="z-10 absolute left-0 right-0 top-0 bottom-0 bg-black opacity-20 shadow-md rounded min-w-50"
        ></div>
      )}
      {dialog && (
        <div className="absolute top-20 left-0 right-0 mx-auto z-20 flex flex-col items-center bg-white max-w-lg w-full p-4 rounded shadow-md">
          <img className="logo mb-5" src={logo} />
          <h1 className="text-2xl font-bold">Login</h1>
          <div className="w-full flex flex-col">
            <label className="mb-2">Email</label>
            <input
              type="email"
              placeholder="jonathan.morningstar@gmail.com"
              className="mb-5 py-2 px-1 bg-slate-100 rounded"
            ></input>
            <label className="mb-2">Password</label>
            <input
              type="password"
              placeholder="type your password"
              className="mb-5 py-2 px-1 bg-slate-100 rounded"
            ></input>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDialog(false)}
                className="border border-red-500 border-2 mt-5 rounded shadow-sm bg-white py-2 px-10 text-red-500"
              >
                Cancel
              </button>
              <button
                onClick={() => setDialog(false)}
                className="border border-sky-500 border-2 mt-5 rounded shadow-sm bg-white py-2 px-10 text-sky-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
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
