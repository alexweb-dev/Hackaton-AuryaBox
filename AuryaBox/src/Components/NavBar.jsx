import '../Components/navbar.css'

function NavBar() {
  return (
    <nav className='first'>
      <img id="logo" src="src\Pictures\AUrya (2).png" alt="" />
      <div id='navbar'>
      <h3>ACCEUIL</h3>
      <h3>OFFRIR</h3>
      <h3>RECEVOIR</h3>
      <div className='button'>
      <button id='button1'>LOGIN</button>
      <button id='button2'>SIGN-UP</button>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
