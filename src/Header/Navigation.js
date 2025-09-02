
function Navigation({ scrollToRef, ref, nameRef }) {
  return (
    <div className="Navigation">
      <p onClick={() => scrollToRef(ref)}>{nameRef}</p>
    </div>
  );
}

export default Navigation;
