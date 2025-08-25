import { LinkWhats, LinkInst, LinkFace, LinkYt } from "../Constantes";

function Redes() {
  return (
    <div className="Redes">
      <img
        src="/icon_whatsapp.png"
        onClick={() => {
          window.open(LinkWhats, "_blank");
        }}
      />
      <img
        src="/icon_instagram.png"
        onClick={() => window.open(LinkInst, "_blank")}
      />
      <img
        src="/icon_facebook.png"
        onClick={() => window.open(LinkFace, "_blank")}
      />
      <img
        src="/icon_youtube.png"
        onClick={() => window.open(LinkYt, "_blank")}
      />
    </div>
  );
}

export default Redes;
