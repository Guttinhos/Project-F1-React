import { api } from '../api/api';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { EquipeContext } from '../contexts/EquipeContext';

export default function Cadastro(props) {
  const { register, handleSubmit } = useForm();

  const { setOpenCreate, setequipeUpdate } = useContext(EquipeContext);

  async function salvarDados(register) {
    await api.post('/equipes', register);
    setequipeUpdate(true);
    setOpenCreate(false);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Equipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(salvarDados)}>
          <div className="form-group mb-3">
            <label>Nome da Equipe</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              {...register('nome')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Motor Utilizado</label>
            <input
              type="text"
              name="motor"
              className="form-control"
              {...register('motor')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Nome do Chassis</label>
            <input
              type="text"
              name="chassis"
              className="form-control"
              {...register('chassi')}
            />
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary">
              Salvar Equipe
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
