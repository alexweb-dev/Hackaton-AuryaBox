import "./App.css";
import { Routes,Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home"
import Offrir from "./Pages/Offrir"
import Receveur from "./Pages/Receveur"
import PopupDonneur from "./Pages/PopupDonneur"
import PopupReceveur from "./Pages/PopupReceveur"
import { BoxProvider } from "./context/BoxContext"



function App() {
  return (
    <>
      <BoxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offrir" element={<Offrir />} />
        <Route path="/Receveur" element={< Receveur/>} />
        <Route path="/PopupDonneur" element={<PopupDonneur />} />
        <Route path="/PopupReceveur" element={<PopupReceveur />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </BoxProvider>
    </>
  );
}

export default App;
