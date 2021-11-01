import axios from 'axios';
import { Children, createContext, useState, useEffect } from 'react';

export const EquipeContext = createContext({});

export default function EquipeProvider({ children }) {
  const [openCreate, setOpenCreate] = useState(false);
  const [equipes, setEquipes] = useState([]);
  const [equipe, setEquipe] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [equipeUpdate, setequipeUpdate] = useState(false);

  function toggleEquipe(equipe) {
    setOpenEdit(true);
    setEquipe(equipe);
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://localhost:8000/api/equipes');
      setEquipes(data.equipes);
    }
    fetchData();
    setequipeUpdate(false);
  }, [equipeUpdate]);

  async function deletarEquipe(id) {
    await axios.delete(`http://localhost:8000/api/equipes/${id}`);
    setequipeUpdate(true);
  }

  return (
    <EquipeContext.Provider
      value={{
        toggleEquipe,
        deletarEquipe,
        setequipeUpdate,
        setOpenCreate,
        openCreate,
        equipe,
        equipes,
        openEdit,
        setOpenEdit,
      }}
    >
      {children}
    </EquipeContext.Provider>
  );
}
