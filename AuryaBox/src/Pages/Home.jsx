import { useNavigate } from "react-router-dom";
import "./home.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <NavBar />
    <section className="styleHome">
      <div className="itemColonne">
        <div className="inputListeNoel1 inputListNoel">
          <p className="Textecss">
            " Offrir : <br></br>
            <br></br>Remplir une boite type boite a chaussures ( 5 objets max
            1kilos par objets) le principe c'est qu'il faut que sa rentre
            dedans, le nombre les gouts et les couleurs sont a votre convenance
            l'important et d'offrir et donner un sourir ce qui n'a pas de prix.
            il faut que les produits sois en très bonne état ou neuf et
            fonctionnels, nous vous proposont ici quelques thème afin de vous
            guidez dans votre don. vous pouvez mélangez biensur plusieurs
            thème."
          </p>
        </div>
        <button
          className="bouttonHome"
          type="button"
          onClick={() => navigate("/Receveur")}
        >
          Les cadeaux
        </button>
      </div>
      <div className="itemColonne">
        <div className="inputListeNoel2 inputListNoel">
          <p className="Textecss">
            "Recevoir : <br></br>
            <br></br> C'est Noel laissez vous guidez par le hasard qui fera bien
            les choses, trouvez la boite qui vous plais cliquez dessus vous
            recevrez une notificartion pour la reception en point relais,
            click&collect, ou même dans votre association préferez retirez votre
            boite magic et profitez-en sans modération.
          </p>
        </div>
        <button
          className="bouttonHome"
          type="button"
          onClick={() => navigate("/Offrir")}
        >
          La Fabrique
        </button>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Home;
