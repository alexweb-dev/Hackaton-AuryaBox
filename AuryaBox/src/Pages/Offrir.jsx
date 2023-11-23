import "./Offrir.css";
function Offrir() {
  return (
    <div className="pageOffrir">
      <div className="pageOffrirTitre">
        <h1>Offrir</h1>
      </div>
      <div className="allBoxes">
        <div className="themeUn theme">
          <button>-</button>
          <p>Jouet</p>
          <button>+</button>
        </div>
        <div className="themeDeux theme">
          <button>-</button>
          <p>Multimedia</p>
          <button>+</button>
        </div>
        <div className="themeTrois theme">
          <button>-</button>
          <p>Livre</p>
          <button>+</button>
        </div>
        <div className="themeQuatre theme">
          <button>-</button>
          <p>Nourriture</p>
          <button>+</button>
        </div>
        <div className="themeCinq theme">
          <button>-</button>
          <p>Voyage</p>
          <button>+</button>
        </div>
        <div className="themeSix theme">
          <button>-</button>
          <p>Cosmétique</p>
          <button>+</button>
        </div>
        <div className="themeSept theme">
          <button>-</button>
          <p>Sport</p>
          <button>+</button>
        </div>
        <div className="themeHuit theme">
          <button>-</button>
          <p>Jeu de Société</p>
          <button>+</button>
        </div>
        <div className="themeNeuf theme">
          <button>-</button>
          <p>Divers</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
export default Offrir;
