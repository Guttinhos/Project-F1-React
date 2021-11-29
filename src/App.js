import React, { useContext } from 'react';
import Cadastro from './components/Cadastro';
import { Button, Table } from 'react-bootstrap';
import Editar from './components/Editar';
import { EquipeContext } from './contexts/EquipeContext';

function App() {
  const {
    toggleEquipe,
    deletarEquipe,
    setOpenCreate,
    openCreate,
    equipe,
    equipes,
    openEdit,
    setOpenEdit,
  } = useContext(EquipeContext);

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
                    <th>Fundador</th>
                    <th>Sede</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {equipes?.map((equipe) => {
                    return (
                      <tr key={equipe.id}>
                        <td>{equipe.id}</td>
                        <td>{equipe.nome}</td>
                        <td>{equipe.motor}</td>
                        <td>{equipe.chassi}</td>
                        <td>{equipe.sede}</td>
                        <td>{equipe.fundador}</td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => {
                              toggleEquipe(equipe);
                            }}
                          >
                            Editar
                          </Button>{' '}
                          <Button
                            variant="danger"
                            onClick={() => {
                              deletarEquipe(equipe.id)
                            }}
                          >
                            Deletar
                          </Button>
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
