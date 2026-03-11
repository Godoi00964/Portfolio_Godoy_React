import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Educacao from "./components/Educacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="reveal"><Home /></div>
      <div className="reveal"><Sobre /></div>
      <div className="reveal"><Educacao /></div>
      <div className="reveal"><Contato /></div>
      <Footer />
    </>
  );
}

export default App;
