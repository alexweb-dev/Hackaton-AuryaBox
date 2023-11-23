import "./App.css";
import { Routes,Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home"
import Donneur from "./Pages/Donneur"
import Receveur from "./Pages/Receveur"
import PopupDonneur from "./Pages/PopupDonneur"
import PopupReceveur from "./Pages/PopupReceveur"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donneur" element={<Donneur />} />
        <Route path="/Receveur" element={< Receveur/>} />
        <Route path="/PopupDonneur" element={<PopupDonneur />} />
        <Route path="/PopupReceveur" element={<PopupReceveur />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
