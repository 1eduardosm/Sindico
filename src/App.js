import { useCallback } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home";
import { useAppRefs, useIsDesktop } from "./Constantes";
import Vantagens from "./Vantagens";
import Contato from "./Contato";
import { getFirestore } from "firebase/firestore";

function App() {

  const { homeRef, vantagensRef, contatoRef } = useAppRefs();
  const isDesktop = useIsDesktop();

  const scrollToRef = useCallback((ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="App">
      <Header
        scrollToRef={scrollToRef}
        homeRef={homeRef}
        vantagensRef={vantagensRef}
        contatoRef={contatoRef}
        isDesktop={isDesktop}
      />
      <Home
        sectionRef={homeRef}
      />
      <Vantagens
        sectionRef={vantagensRef}
      />
      <Contato
        sectionRef={contatoRef}
      />
      <div className="Footer">
        <p>Eu te amo pai!!!</p>
      </div>
    </div>
  );
}
export default App;