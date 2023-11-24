import "./popupDonneur.css";
function PopupDonneur() {
  return (
    <main>
      <form className="formContainerDonneur">
        <div className="imageCadeauDonneur">
          <img
            src="src/Pictures/gift-304239_1920.png"
            alt="Box Donneur"
            className="boxDonneur"
          ></img>
          <a href="">
            <img
              src="src/Pictures/cadeauValid.png"
              alt="Cadeau Valid"
              className="cadeauValid"
            ></img>
          </a>
        </div>

        <p className="textLoginDonneur">
          &#34; Merci pour  votre participation et <br></br>votre  don  et  inestimable&#34;
        </p>
      </form>
    </main>
  );
}
export default PopupDonneur;
