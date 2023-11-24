import { useState, useEffect, useRef } from "react";
import useBox from "../context/BoxContext";
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
  const [nbBoite, setNbBoite] = useState(1);
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

  useEffect(() => {
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;

    if (count > 0) {
      if (count % 5 === 4 && count < prevCount && nbBoite >= 1) {
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
  function panier() {
    if ((count === 1 || count === 0) && nbBoite === 1) {
      return (
        <p>
          Vous avez donné : {count} Article, pour un total de {nbBoite} Boîte.
          <br />Merci Beaucoup !
        </p>
      );
    } else if ((count === 1 || count === 0) && nbBoite >= 2) {
      return (
        <p>
          Vous avez donné : {count} Article, pour un total de {nbBoite} Boîtes.
          <br />Merci Beaucoup !
        </p>
      );
    } else if (count >= 2 && nbBoite === 1) {
      return (
        <p>
          Vous avez donné : {count} Articles, pour un total de {nbBoite} Boîte.
          <br />Merci Beaucoup !
        </p>
      );
    } else if (count >= 2 && nbBoite >= 2) {
      return (
        <p>
          Vous avez donné : {count} Articles, pour un total de {nbBoite} Boîtes.
          <br />Merci Beaucoup !
        </p>
      );
    }
  }

  return (
    <>
      <NavBar />
      <div className="pageOffrir">
        <div className="pageOffrirTitre">
          <h1>Que Souhaites Tu Offrir ?</h1>
        </div>
        <div className="allBoxes">
          <div className="themeUn theme">
            <button onClick={decrementCountVetement} className="minus">-</button>
            <img src={Vetement} alt="Vêtements" />
            <button onClick={incrementCountVetement} className="add">+</button>
          </div>

          <div className="themeDeux theme">
            <button onClick={decrementCountJouet} className="minus">-</button>
            <img src={Jouet} alt="Jouet" />
            <button onClick={incrementCountJouet} className="add">+</button>
          </div>
          <div className="themeTrois theme">
            <button onClick={decrementCountMultimedia} className="minus">-</button>
            <img src={Multimedia} alt="Multimedia" />
            <button onClick={incrementCountMultimedia} className="add">+</button>
          </div>
          <div className="themeQuatre theme">
            <button onClick={decrementCountLivre} className="minus">-</button>
            <img src={Livre} alt="Livre" />
            <button onClick={incrementCountLivre} className="add">+</button>
          </div>
          <div className="themeCinq theme">
            <button onClick={decrementCountNourriture} className="minus">-</button>
            <img src={Nourriture} alt="Nourriture" />
            <button onClick={incrementCountNourriture} className="add">+</button>
          </div>
          <div className="themeSix theme">
            <button onClick={decrementCountVoyage} className="minus">-</button>
            <img src={Voyage} alt="Voyage" />
            <button onClick={incrementCountVoyage} className="add">+</button>
          </div>
          <div className="themeSept theme">
            <button onClick={decrementCountCosmétique} className="minus">-</button>
            <img src={Cosmétique} alt="Cosmétique" />
            <button onClick={incrementCountCosmétique} className="add">+</button>
          </div>
          <div className="themeHuit theme">
            <button onClick={decrementCountSport} className="minus">-</button>
            <img src={Sport} alt="Sport" />
            <button onClick={incrementCountSport} className="add">+</button>
          </div>
          <div className="themeNeuf theme">
            <button onClick={decrementCountDivers} className="minus">-</button>
            <img src={Divers} alt="Divers" />
            <button onClick={incrementCountDivers} className="add">+</button>
          </div>
<div className="panier">{panier()}</div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Offrir;
