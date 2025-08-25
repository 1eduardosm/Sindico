import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";

function App() {
  const homeRef = useRef(null);
  const vantagensRef = useRef(null);
  const contatoRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header
        scrollToRef={scrollToRef}
        homeRef={homeRef}
        vantagensRef={vantagensRef}
        contatoRef={contatoRef}
        isDesktop={isDesktop}
      />
      <div className="Home" ref={homeRef}>
        <div className="Fundo">
          <img src="/fundo.png" alt="Fundo" />
        </div>
        <div className="Inicio">
          <div className="InicioTitulo"></div>
          <div className="InicioDescritivo"></div>
          <div className="InicioCards"></div>
        </div>
      </div>
      <div className="Vantagens" ref={vantagensRef}></div>
      <div className="Contato" ref={contatoRef}></div>
      <div className="Footer">
        <p>Eu te amo pai!!!</p>
      </div>
    </div>
  );
}

export default App;
