import { api } from '../api/api';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { EquipeContext } from '../contexts/EquipeContext';

export default function Editar(props) {
  const { register, handleSubmit } = useForm();
  const { setOpenEdit, setequipeUpdate } = useContext(EquipeContext);
  async function editarDados(register) {
    await api.put(`/equipes/${props.equipe.id}`, register);
    setOpenEdit(false);
    setequipeUpdate(true);
  }

  function onChange() {
    
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Equipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(editarDados)}>
          <div className="form-group mb-3">
            <label>Nome da Equipe</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              defaultValue={props.equipe.nome}
              onChange={onChange()}
              {...register('nome')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Motor Utilizado</label>
            <input
              type="text"
              name="motor"
              className="form-control"
              defaultValue={props.equipe.motor}
              {...register('motor')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Nome do Chassis</label>
            <input
              type="text"
              name="chassis"
              className="form-control"
              defaultValue={props.equipe.chassi}
              {...register('chassi')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Nome do Fundador</label>
            <input
              type="text"
              name="fundador"
              className="form-control"
              defaultValue={props.equipe.fundador}
              {...register('fundador')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Sede</label>
            <input
              type="text"
              name="sede"
              className="form-control"
              defaultValue={props.equipe.sede}
              {...register('sede')}
            />
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary">
              Editar Equipe
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
