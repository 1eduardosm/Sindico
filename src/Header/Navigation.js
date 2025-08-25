import { NameHome, NameVantagens, NameContato } from "../Constantes";

function Navigation({ scrollToRef, homeRef, vantagensRef, contatoRef }) {
  return (
    <div className="Navigation">
      <p onClick={() => scrollToRef(homeRef)}>{NameHome}</p>
      <p onClick={() => scrollToRef(vantagensRef)}>{NameVantagens}</p>
      <p onClick={() => scrollToRef(contatoRef)}>{NameContato}</p>
    </div>
  );
}

export default Navigation;
