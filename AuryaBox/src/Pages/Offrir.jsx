import { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Jouet from "../Pictures/jouets.png";
import Multimedia from "../Pictures/multimedia-interactif.png";
import Livre from "../Pictures/livre.png";
import Nourriture from "../Pictures/nourriture.png";
import Voyage from "../Pictures/voyage.png";
import Cosmétique from "../Pictures/savon.png";
import Sport from "../Pictures/sports.png";
import Vetement from "../Pictures/t-shirt.png";
import Divers from "../Pictures/divers.png";
import "./Offrir.css";

function Offrir() {
  const [count, setCount] = useState(0);
  const [nbBoite, setNbBoite] = useState(0);
  //   const [countJouet, setcountJouet] = useState(0);
  //   const [countMultimédia, setcountMultimédia] = useState(0);
  //   const [countLivre, setcountLivre] = useState(0);
  //   const [countNourriture, setcountNourriture] = useState(0);
  //   const [countVoyage, setcountVoyage] = useState(0);
  //   const [countCosmétique, setcountCosmétique] = useState(0);
  //   const [countSport, setcountSport] = useState(0);
  //   const [countJeudDeSociété, setcountJeuDeSociété] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log(count);
  function boites() {
    if (count % 5 === 0) {
      setNbBoite(nbBoite + 1);
    } else if (count % 5 === 4) {
      setNbBoite(nbBoite - 1);
    }
  }
  console.log(nbBoite);

  return (
    <>
      <NavBar />
      <div className="pageOffrir">
        <div className="pageOffrirTitre">
          <h1>Offrir</h1>
          <p>{boites}</p>
        </div>
        <div className="allBoxes">
          <div className="themeUn theme">
            <button onClick={decrementCount}>-</button>
            <img src={Vetement} alt="Vêtements" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeDeux theme">
            <button onClick={decrementCount}>-</button>
            <img src={Jouet} alt="Jouet" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeTrois theme">
            <button onClick={decrementCount}>-</button>
            <img src={Multimedia} alt="Multimedia" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeQuatre theme">
            <button onClick={decrementCount}>-</button>
            <img src={Livre} alt="Livre" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeCinq theme">
            <button onClick={decrementCount}>-</button>
            <img src={Nourriture} alt="Nourriture" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeSix theme">
            <button onClick={decrementCount}>-</button>
            <img src={Voyage} alt="Voyage" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeSept theme">
            <button onClick={decrementCount}>-</button>
            <img src={Cosmétique} alt="Cosmétique" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeHuit theme">
            <button onClick={decrementCount}>-</button>
            <img src={Sport} alt="Sport" />
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="themeNeuf theme">
            <button onClick={decrementCount}>-</button>
            <img src={Divers} alt="Divers" />
            <button onClick={incrementCount}>+</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Offrir;
