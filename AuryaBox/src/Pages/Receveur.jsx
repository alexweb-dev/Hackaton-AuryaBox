import { useState } from "react";
import c1 from "../Pictures/c1.png";
import c2 from "../Pictures/c2.png";
import c3 from "../Pictures/c3.png";

function Receveur() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ {c1}, { c2 }, { c3 }];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Précédent</button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>Suivant</button>
    </div>
  );
}

export default Receveur;
