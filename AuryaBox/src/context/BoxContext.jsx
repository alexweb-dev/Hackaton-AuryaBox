import { createContext, useContext, useState, useMemo } from "react";

const BoxContext = createContext();

export function BoxProvider({ children }) {
  const [object, setObject] = useState(0);
  const [boite, setBoite] = useState(0);
  const [vetement, setVetement] = useState(0);
  const [jouet, setJouet] = useState(0);
  const [multimedia, setMultimedia] = useState(0);
  const [livre, setLivre] = useState(0);
  const [nourriture, setNourriture] = useState(0);
  const [voyage, setVoyage] = useState(0);
  const [cosmetic, setCosmetic] = useState(0);
  const [sport, setSport] = useState(0);
  const [divers, setDivers] = useState(0);

  const value = useMemo(
    () => ({
      object,
      setObject,
      boite,
      setBoite,
      vetement,
      setVetement,
      jouet,
      setJouet,
      multimedia,
      setMultimedia,
      livre,
      setLivre,
      nourriture,
      setNourriture,
      voyage,
      setVoyage,
      cosmetic,
      setCosmetic,
      sport,
      setSport,
      divers,
      setDivers,
    }),
    [
      object,
      boite,
      vetement,
      jouet,
      multimedia,
      livre,
      nourriture,
      voyage,
      cosmetic,
      sport,
      divers,
    ]
  );
  console.log(
    object,
    boite,
    vetement,
    jouet,
    multimedia,
    livre,
    nourriture,
    voyage,
    cosmetic,
    sport,
    divers
  );

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>;
}

const useBox = () => useContext(BoxContext);
export default useBox;
