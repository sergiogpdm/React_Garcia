import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const casesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Header refs={{ homeRef, servicesRef, teamRef, casesRef, contactRef }} />
        <main>
          <Home ref={homeRef} />
          <Services ref={servicesRef} />
          <Team ref={teamRef} />
          <Cases ref={casesRef} />
          <Contact ref={contactRef} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
