import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <section className="styleHome">
        <div className="itemColonne">
          <div className="inputListeNoel2">
            <p className="Textecss">
              Recevoir : <br></br>
              <br></br> C'est Noël, laissez vous guider par le hasard qui fera
              bien les choses. <br />
              Trouvez la boîte qui vous plaît, cliquez dessus,
              vous recevrez une notification pour la reception en point relais
              click&collect, ou même dans votre association préferée. <br />
              Retirez votre boîte magique et profitez-en sans modération.
              <br /><br /><br /> 
              Profitez de vos cadeaux et Joyeux Noël.
            </p>
          </div>
          <div id="bouttonLaFabrique">
            <button
              className="bouttonHome"
              type="button"
              onClick={() => navigate("/Receveur")}
            >
              Au pied du sapin
            </button>
          </div>
        </div>
        <div className="itemColonne">
          <div className="inputListeNoel1">
            <p className="Textecss">
              Offrir : <br></br>
              <br></br>Remplir une boîte au format boîte à chaussures, contenant 5 objets maximum, 
              et pesant pas plus d'1 kilo par objet. <br />Le principe, c'est qu'il faut que ça rentre
              dedans. <br /> Le nombre de boîte, leur couleurs et leur rubans sont à votre
              convenance. <br /> L'important est d'offrir et de donner le sourir. Cela n'a
              pas de prix. Il faut que les produits soient en très bon état et
              fonctionnels ou neufs. <br /> Nous vous proposont ici quelques thèmes afin
              de vous guider dans votre don. Vous pouvez bien sûr mélanger 
              plusieurs thèmes.
            </p>
          </div>
          <div id="bouttonLesCadeaux">
            <button
              className="bouttonHome"
              type="button"
              onClick={() => navigate("/Offrir")}
            >
              La Fabrique
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
