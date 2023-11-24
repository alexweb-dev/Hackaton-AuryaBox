import { useNavigate } from "react-router-dom";
import "../Components/navbar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="first">
      <img
        id="logo"
        src="src\Pictures\box (3).png"
        alt=""
        onClick={() => navigate("/")}
      />
      <div id="navbar">
        <h3 onClick={() => navigate("/")}>ACCUEIL</h3>
        <h3 onClick={() => navigate("/Offrir")}>AU PIED DU SAPIN</h3>
        <h3 onClick={() => navigate("/Receveur")}>LA FABRIQUE</h3>
        <div className="button">
          <button id="button1">LOGIN</button>
          <button id="button2">SIGN-UP</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
