import React, { useEffect, useState } from 'react';
import Cadastro from './components/Cadastro';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Editar from './components/Editar';

function App() {
  const [openCreate, setOpenCreate] = useState(false);
  const [equipes, setEquipes] = useState([]);
  const [equipe, setEquipe] = useState({});
  const [openEdit, setOpenEdit] = useState(false);

  function toggleEquipe(equipe) {
    setOpenEdit(true);
    setEquipe(equipe);
  }

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:8000/api/equipes');
    setEquipes(data.equipes);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Equipes
                <Button
                  onClick={() => {
                    setOpenCreate(true);
                  }}
                  className="float-end"
                  variant="primary"
                >
                  Adicionar Equipes
                </Button>
                <Cadastro
                  show={openCreate}
                  onHide={() => setOpenCreate(false)}
                />
              </h4>
            </div>
            <div className="card-body">
              <Table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Equipe</th>
                    <th>Motor</th>
                    <th>Chassis</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {equipes.map((equipe) => {
                    return (
                      <tr key={equipe.id}>
                        <td>{equipe.id}</td>
                        <td>{equipe.nome}</td>
                        <td>{equipe.motor}</td>
                        <td>{equipe.chassi}</td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => {
                              toggleEquipe(equipe);
                            }}
                          >
                            Editar
                          </Button>{' '}
                          <Button variant="danger">Deletar</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {openEdit && (
                <Editar
                  show={openEdit}
                  equipe={equipe}
                  onHide={() => setOpenEdit(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
