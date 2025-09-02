
function Redes({icon, page}) {
  return (
    <div className="Redes">
      <img
        src={icon}
        onClick={() => {
          window.open(page, "_blank");
        }}
      />
    </div>
  );
}

export default Redes;
