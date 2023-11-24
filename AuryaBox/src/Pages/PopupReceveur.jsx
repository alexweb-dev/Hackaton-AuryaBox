import "./popupReceveur.css";
import Snow from "./Snow";
import C1 from "../Pictures/c1.png"
  function PopupReceveur (){
  return (
    <main className="snow">
        <Snow>
          <center className="imageCadeau">
            <img
              src= {C1}
              alt="Box Receveur"
              className="boxReceveur"
            ></img>
            <p className="textLoginReceveur">
              &#34; Hohohoho... le père noël et sa hotte sont en cour
              d&#39;acheminement votre boite magique arrive bientôt!! &#34;
            </p>
          </center>
        </Snow>
    </main>
  );
}
export default PopupReceveur;


