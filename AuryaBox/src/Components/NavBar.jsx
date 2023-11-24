import { useNavigate } from "react-router-dom";
import '../Components/navbar.css'

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className='first'>
      <img id="logo" src="src\Pictures\box__2_-removebg-preview.png" alt="" />
      <div id='navbar'>
      <h3 type="button" onClick={() => navigate("/")}>ACCEUIL</h3>
      <h3 type="button" onClick={() => navigate("/Offrir")}>OFFRIR</h3>
      <h3 type="button" onClick={() => navigate("/Receveur")}>RECEVOIR</h3>
      <div className='button'>
      <button id='button1'>LOGIN</button>
      <button id='button2'>SIGN-UP</button>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
