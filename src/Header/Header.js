import "../App.css"; // CSS global
import Logo from "./Logo";
import Navigation from "./Navigation";
import Redes from "./Redes";
import { LinkWhats, LinkInst, LinkFace, LinkYt } from "../Constantes";
import { NameHome, NameVantagens, NameContato } from "../Constantes";


export default function Header({ scrollToRef, homeRef, vantagensRef, contatoRef, isDesktop }) {
  return (
    <div className="Header"> 
      <Logo />
      <Navigation scrollToRef={scrollToRef} nameRef={NameHome} ref={homeRef}/>
      <Navigation scrollToRef={scrollToRef} nameRef={NameVantagens} ref={vantagensRef}/>
      <Navigation scrollToRef={scrollToRef} nameRef={NameContato} ref={contatoRef}/>

      {isDesktop && 
      <div style={{display: "flex"}}>
        <Redes icon={"/icon_whatsapp.png"} page={LinkWhats}/> 
        <Redes icon={"/icon_facebook.png"} page={LinkFace}/> 
        <Redes icon={"/icon_instagram.png"} page={LinkInst}/> 
      </div>}  
    </div>
  );
}
