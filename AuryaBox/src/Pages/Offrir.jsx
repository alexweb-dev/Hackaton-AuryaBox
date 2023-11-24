import { useState, useEffect, useRef } from "react";
import useBox from "../context/BoxContext";
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
  const prevCountRef = useRef();
  const {
    setObject,
    setBoite,
    setVetement,
    setJouet,
    setMultimedia,
    setLivre,
    setNourriture,
    setVoyage,
    setCosmetic,
    setSport,
    setDivers,
  } = useBox();
  const [countVetement, setCountVetement] = useState(0);
  const [countJouet, setCountJouet] = useState(0);
  const [countMultimédia, setCountMultimédia] = useState(0);
  const [countLivre, setCountLivre] = useState(0);
  const [countNourriture, setCountNourriture] = useState(0);
  const [countVoyage, setCountVoyage] = useState(0);
  const [countCosmétique, setCountCosmétique] = useState(0);
  const [countSport, setCountSport] = useState(0);
  const [countDivers, setcountDivers] = useState(0);
  setObject(count);
  setBoite(nbBoite);
  setVetement(countVetement);
  setJouet(countJouet);
  setMultimedia(countMultimédia);
  setLivre(countLivre);
  setNourriture(countNourriture);
  setVoyage(countVoyage);
  setCosmetic(countCosmétique);
  setSport(countSport);
  setDivers(countDivers);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  useEffect(() => {
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;

    if (count > 0) {
      if (count % 5 === 4 && count < prevCount) {
        setNbBoite(nbBoite - 1);
      } else if (count % 5 === 0 && count > prevCount) {
        setNbBoite(nbBoite + 1);
      }
    }
  }, [count, nbBoite]);
  console.log(count, nbBoite);

  // Pour Vêtement
  const incrementCountVetement = () => {
    setCountVetement(countVetement + 1);
    setCount(count + 1);
  };

  const decrementCountVetement = () => {
    if (countVetement > 0) {
      setCountVetement(countVetement - 1);
      setCount(count - 1);
    }
  };

  // Pour Jouet
  const incrementCountJouet = () => {
    setCountJouet(countJouet + 1);
    setCount(count + 1);
  };

  const decrementCountJouet = () => {
    if (countJouet > 0) {
      setCountJouet(countJouet - 1);
      setCount(count - 1);
    }
  };

  // Pour Multimédia
  const incrementCountMultimedia = () => {
    setCountMultimédia(countMultimédia + 1);
    setCount(count + 1);
  };

  const decrementCountMultimedia = () => {
    if (countMultimédia > 0) {
      setCountMultimédia(countMultimédia - 1);
      setCount(count - 1);
    }
  };

  // Pour Livre
  const incrementCountLivre = () => {
    setCountLivre(countLivre + 1);
    setCount(count + 1);
  };

  const decrementCountLivre = () => {
    if (countLivre > 0) {
      setCountLivre(countLivre - 1);
      setCount(count - 1);
    }
  };

  // Pour Nourriture
  const incrementCountNourriture = () => {
    setCountNourriture(countNourriture + 1);
    setCount(count + 1);
  };

  const decrementCountNourriture = () => {
    if (countNourriture > 0) {
      setCountNourriture(countNourriture - 1);
      setCount(count - 1);
    }
  };

  // Pour Voyage
  const incrementCountVoyage = () => {
    setCountVoyage(countVoyage + 1);
    setCount(count + 1);
  };

  const decrementCountVoyage = () => {
    if (countVoyage > 0) {
      setCountVoyage(countVoyage - 1);
      setCount(count - 1);
    }
  };

  // Pour Cosmétique
  const incrementCountCosmétique = () => {
    setCountCosmétique(countCosmétique + 1);
    setCount(count + 1);
  };

  const decrementCountCosmétique = () => {
    if (countCosmétique > 0) {
      setCountCosmétique(countCosmétique - 1);
      setCount(count - 1);
    }
  };

  // Pour Sport
  const incrementCountSport = () => {
    setCountSport(countSport + 1);
    setCount(count + 1);
  };

  const decrementCountSport = () => {
    if (countSport > 0) {
      setCountSport(countSport - 1);
      setCount(count - 1);
    }
  };

  // Pour Divers
  const incrementCountDivers = () => {
    setcountDivers(countDivers + 1);
    setCount(count + 1);
  };

  const decrementCountDivers = () => {
    if (countDivers > 0) {
      setcountDivers(countDivers - 1);
      setCount(count - 1);
    }
  };
  console.log(
    countVetement,
    countJouet,
    countMultimédia,
    countLivre,
    countNourriture,
    countVoyage,
    countCosmétique,
    countSport,
    countDivers
  );
  return (
    <div className="pageOffrir">
      <div className="pageOffrirTitre">
        <h1>Offrir</h1>
      </div>
      <div className="allBoxes">
        <div className="themeUn theme">
          <button onClick={decrementCountVetement}>-</button>
          <img src={Vetement} alt="Vêtements" />
          <button onClick={incrementCountVetement}>+</button>
        </div>
        <div className="themeDeux theme">
          <button onClick={decrementCountJouet}>-</button>
          <img src={Jouet} alt="Jouet" />
          <button onClick={incrementCountJouet}>+</button>
        </div>
        <div className="themeTrois theme">
          <button onClick={decrementCountMultimedia}>-</button>
          <img src={Multimedia} alt="Multimedia" />
          <button onClick={incrementCountMultimedia}>+</button>
        </div>
        <div className="themeQuatre theme">
          <button onClick={decrementCountLivre}>-</button>
          <img src={Livre} alt="Livre" />
          <button onClick={incrementCountLivre}>+</button>
        </div>
        <div className="themeCinq theme">
          <button onClick={decrementCountNourriture}>-</button>
          <img src={Nourriture} alt="Nourriture" />
          <button onClick={incrementCountNourriture}>+</button>
        </div>
        <div className="themeSix theme">
          <button onClick={decrementCountVoyage}>-</button>
          <img src={Voyage} alt="Voyage" />
          <button onClick={incrementCountVoyage}>+</button>
        </div>
        <div className="themeSept theme">
          <button onClick={decrementCountCosmétique}>-</button>
          <img src={Cosmétique} alt="Cosmétique" />
          <button onClick={incrementCountCosmétique}>+</button>
        </div>
        <div className="themeHuit theme">
          <button onClick={decrementCountSport}>-</button>
          <img src={Sport} alt="Sport" />
          <button onClick={incrementCountSport}>+</button>
        </div>
        <div className="themeNeuf theme">
          <button onClick={decrementCountDivers}>-</button>
          <img src={Divers} alt="Divers" />
          <button onClick={incrementCountDivers}>+</button>
        </div>
      </div>
    </div>
  );
}
export default Offrir;
