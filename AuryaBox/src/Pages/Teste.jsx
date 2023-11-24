import c1 from "../Pictures/c1.png";
import c2 from "../Pictures/c2.png";
import c3 from "../Pictures/c3.png";
import c4 from "../Pictures/c3.png";
import c5 from "../Pictures/c3.png";
import c6 from "../Pictures/c3.png";
function test() {
  const handleClick = () => {
    console.log("Image cliquée !");
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c1}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }} 
        />
      </button>

      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c2}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }} 
        />
      </button>
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c3}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }} 
        />
      </button>
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c4}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }}
        />
      </button>
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c5}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }} 
        />
      </button>
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src={c6}
          alt="Image Bouton"
          style={{ width: "100px", height: "100px" }} 
        />
      </button>
    </>
  );
}

export default test;
