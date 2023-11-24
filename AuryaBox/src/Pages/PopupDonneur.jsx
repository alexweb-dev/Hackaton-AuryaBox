import "./popupDonneur.css";
function PopupDonneur() {
  return (
    <main>
      <form className="formContainerDonneur">
        <center className="imageCadeauDonneur">
          <img
            src="src/Pictures/c1.png"
            alt="Box Donneur"
            className="boxDonneur"
          ></img>
        </center>

        <p className="textLoginDonneur">
          &#34; Merci pour votre participation et <br></br>votre don et
          inestimable&#34;
        </p>
      </form>
    </main>
  );
}
export default PopupDonneur;
