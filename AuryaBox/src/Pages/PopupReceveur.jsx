import "./popupReceveur.css";
import Snow from "./Snow";

function PopupReceveur() {

  
  return (
    <main className="snow">
        <Snow>
          <center className="imageCadeau">
            <img
              src="src/Pictures/gift-304239_1920.png"
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


