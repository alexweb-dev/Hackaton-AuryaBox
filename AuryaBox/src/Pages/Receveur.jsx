import { useState } from "react";
import "./Receveur.css"
import c1 from "../Pictures/c1.png";
import c2 from "../Pictures/c2.png";
import c3 from "../Pictures/c3.png";
import precedent from "../Pictures/precedent.png"
import suivant from "../Pictures/suivant.png"


function Receveur() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ c1, c2, c3 ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="swapp">
    <div className="carousel">
      <button onClick={prevSlide}><img src={precedent} alt="" className="precedent" type="button"/></button>
      <img className="cadeaux" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}><img src={suivant} alt="" className="suivant"/></button>
     </div>
    </div>
  );
}

export default Receveur;
