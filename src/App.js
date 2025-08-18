import React, { useRef } from "react";
import './App.css';

function App() {
  const homeRef = useRef(null);
  const vantagensRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="Navigation">
          <p onClick={() => scrollToRef(homeRef)}>Home</p>
          <p onClick={() => scrollToRef(vantagensRef)}>Vantagens</p>
          <p onClick={() => scrollToRef(contatoRef)}>Contato</p>
        </div>
        <div className="Logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
      </div>

      <div className="Body">
        <div className="Home" ref={homeRef}>Home</div>
        <div className="Vantagens" ref={vantagensRef}>Vantagens</div>
        <div className="Contato" ref={contatoRef}>Contato</div>
      </div>

      {/* Footer */}
      <div className="Footer">
        <p>Eu te amo pai!</p>
      </div>
    </div>
  );
}

export default App;
