import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

// LAZY LOADER
const Home = lazy(() => import("./components/Home/Home"));
const Services = lazy(() => import("./components/Services/Services"));
const Team = lazy(() => import("./components/Team/Team"));
const Cases = lazy(() => import("./components/Cases/Cases"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const casesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Header
          refs={{ homeRef, servicesRef, teamRef, casesRef, contactRef }}
        />
        <main>
          <Suspense fallback={<Loader />}>
            <Home ref={homeRef} />
            <Services ref={servicesRef} />
            <Team ref={teamRef} />
            <Cases ref={casesRef} />
            <Contact ref={contactRef} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
