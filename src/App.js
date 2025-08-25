import React, { useRef, useState, useEffect } from "react";
import './App.css';
const numero = "5547999629798"; 

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
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="Logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <div className="Navigation">
          <p onClick={() => scrollToRef(homeRef)}>Início</p>
          <p onClick={() => scrollToRef(vantagensRef)}>Vantagens</p>
          <p onClick={() => scrollToRef(contatoRef)}>Contato</p>
        </div>
        {isDesktop && (
          <div className="Redes">
            <img
              src="/icon_whatsapp.png"
              alt="whatsapp"
              onClick={() => {
                
                const mensagem = "Olá, vi seu site, gostaria de mais informações";
                const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
                window.open(url, "_blank");
              }}
              style={{ cursor: "pointer" }}
            />
            <img
              src="/icon_instagram.png"
              alt="instagram"
              onClick={() => window.open("https://www.instagram.com/sindicocarlosmoraes?igsh=MWQ3ajM2eXJmbDVqdQ%3D%3D&utm_source=qr", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <img
              src="/icon_facebook.png"
              alt="gmail"
              onClick={() => window.open("https://www.facebook.com/share/1BK6JfpUEo/?mibextid=wwXIfr", "_blank")}
              style={{ cursor: "pointer" }}
            />
            <img
              src="/icon_youtube.png"
              alt="youtube"
              onClick={() => window.open("https://www.youtube.com/channel/UC1kyVthlbkzK0D9bkioGCEg", "_blank")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>

      <div className="Body">
        <div className="Home" ref={homeRef}>
          <div className="Fundo">
            <img src="/fundo.png"/>
          </div>
          <div className="Inicio">
            <div className="InicioTitulo">

            </div>
            <div className="InicioDescritivo">

            </div>
            <div className="InicioCards">

            </div>
          </div>
        </div>
        <div className="Vantagens" ref={vantagensRef}>
          
        </div>
        <div className="Contato" ref={contatoRef}>Contato</div>
      </div>

      {/* Footer */}
      <div className="Footer">
        <p>Eu te amo pai!!!</p>
      </div>
    </div>
  );
}

export default App;
