import { useState } from "react";
import "./Offrir.css";

function Offrir() {
  const [count, setCount] = useState(0);
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
    setCount(count - 1);
  };
  console.log(count);

  return (
    <div className="pageOffrir">
      <div className="pageOffrirTitre">
        <h1>Offrir</h1>
      </div>
      <div className="allBoxes">
        <div className="themeUn theme">
          <button onClick={decrementCount}>-</button>
          <p>Jouet</p>
          <button onClick={incrementCount}>+</button>
        </div>
        <div className="themeDeux theme">
          <button onClick ={decrementCount}>-</button>
          <p>Multimedia</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeTrois theme">
          <button onClick ={decrementCount}>-</button>
          <p>Livre</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeQuatre theme">
          <button onClick ={decrementCount}>-</button>
          <p>Nourriture</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeCinq theme">
          <button onClick ={decrementCount}>-</button>
          <p>Voyage</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeSix theme">
          <button onClick ={decrementCount}>-</button>
          <p>Cosmétique</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeSept theme">
          <button onClick ={decrementCount}>-</button>
          <p>Sport</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeHuit theme">
          <button onClick ={decrementCount}>-</button>
          <p>Jeu de Société</p>
          <button onClick ={incrementCount}>+</button>
        </div>
        <div className="themeNeuf theme">
          <button onClick ={decrementCount}>-</button>
          <p>Divers</p>
          <button onClick ={incrementCount}>+</button>
        </div>
      </div>
    </div>
  );
}
export default Offrir;
