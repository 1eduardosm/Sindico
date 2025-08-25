import "../App.css"; // CSS global
import Logo from "./Logo";
import Navigation from "./Navigation";
import Redes from "./Redes";

export default function Header({ scrollToRef, homeRef, vantagensRef, contatoRef, isDesktop }) {
  return (
    <div className="Header"> 
      <Logo />
      <Navigation
        scrollToRef={scrollToRef} 
        homeRef={homeRef}
        vantagensRef={vantagensRef}
        contatoRef={contatoRef}
      />
      {isDesktop && <Redes />}  
    </div>
  );
}
