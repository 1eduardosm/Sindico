import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

export const Numero = "5547999629798";
export const Mensagem = "Olá, vi seu site, gostaria de mais informações";
export const LinkWhats = `https://wa.me/${Numero}?text=${encodeURIComponent(Mensagem)}`

export const LinkInst = "https://www.instagram.com/sindicocarlosmoraes?igsh=MWQ3ajM2eXJmbDVqdQ%3D%3D&utm_source=qr"

export const LinkFace = "https://www.facebook.com/share/1BK6JfpUEo/?mibextid=wwXIfr"

export const LinkYt = "https://www.youtube.com/channel/UC1kyVthlbkzK0D9bkioGCEg"

export const NameHome = "Início";
export const NameVantagens = "Vantagens";
export const NameContato = "Contato";