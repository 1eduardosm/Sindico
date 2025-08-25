function Home({ sectionRef }) {
  return (
    <div className="Home" ref={sectionRef}>
      <div className="Fundo">
        <img src="/fundo.png" alt="Fundo" />
      </div>
      <div className="Inicio">
        <div className="InicioTitulo"></div>
        <div className="InicioDescritivo"></div>
        <div className="InicioCards"></div>
      </div>
    </div>
  );
}
export default Home;