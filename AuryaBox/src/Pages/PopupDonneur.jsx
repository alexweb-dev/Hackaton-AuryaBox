import "./popupDonneur.css";
function PopupDonneur() {
  return (
    <main>
      <form className="formContainer">
        <p className="textLogin">Login</p>
        <input
          className="formContainerInput"
          type="email"
          placeholder="email@gmail.com"
        ></input>
        <input
          className="formContainerInput"
          type="password"
          placeholder="****"
        ></input>
        <button>Connexion</button>
        <p className="Compte">
          Vous n&#39; avez pas de compte? <a href="#">Créer un compte!</a>
        </p>
      </form>
    </main>
  );
}
export default PopupDonneur;
