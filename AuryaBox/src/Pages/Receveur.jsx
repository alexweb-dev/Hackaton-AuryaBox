import { useState } from "react";
import "./Receveur.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import c1 from "../Pictures/c1.png";
import c2 from "../Pictures/c2.png";
import c3 from "../Pictures/c3.png";
import c4 from "../Pictures/c4.png";
import c5 from "../Pictures/c5.png";
import c6 from "../Pictures/c6.png";
import c7 from "../Pictures/c7.png";
import precedent from "../Pictures/precedent.png";
import suivant from "../Pictures/suivant.png";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PopupReceveur from "./PopupReceveur";

function Receveur() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [c1, c2, c3, c4, c5, c6, c7];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );

  };
  const [display2, setDisplay2] = useState(false);
  const onOpenModal2 = () => setDisplay2(true);
  const onCloseModal2 = () => setDisplay2(false);

  return (
    <>
      <NavBar />
      <div className="swapp">
        <div className="carousel">
          <button className="buttonreceveurprecedent" onClick={prevSlide}>
            <img src={precedent} alt="" className="precedent" type="button" />
          </button>
          <button
            type="button"
            className="buttoncadeaux"
            onClick={onOpenModal2}
          >
            <img
              className="cadeaux"
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
            />
          </button>
          <Modal classNames={"backgroundModal"} open={display2} onClose={onCloseModal2} center>
        <PopupReceveur />
      </Modal>
          <button className="buttonreceveursuivant" onClick={nextSlide}>
            <img src={suivant} alt="" className="suivant" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Receveur;
