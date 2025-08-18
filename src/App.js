import './App.css';
import { useRef } from "react";


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
        <div className='Hsw'>
          <p>Sindico Profissional</p>
        </div>
        <div className='Navigation'>
          <p onClick={() => scrollToRef(homeRef)}>Home</p>
          <p onClick={() => scrollToRef(vantagensRef)}>Vantagens</p>
          <p onClick={() => scrollToRef(contatoRef)}>Contato</p>
        </div>
        <div className="Logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
      </div>
      <div className="Body">
        <div className="Home" ref={homeRef}>

        </div>
        <div className="Vantagens" ref={vantagensRef}>
        
        </div>
        <div className="Contato" ref={contatoRef}>
        
        </div>
      </div>
      <div className="Footer">
        <p>Eu te amo pai!</p>
      </div>
    </div >
  );
}

export default App;
