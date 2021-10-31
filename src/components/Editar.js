import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function Editar(props) {
  const { register, handleSubmit } = useForm();

  async function editarDados(register) {
    await axios.put(
      `http://localhost:8000/api/update-equipes/${props.equipe.id}`,
      register,
    );
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
              placeholder={props.equipe.nome}
              {...register('nome')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Motor Utilizado</label>
            <input
              type="text"
              name="motor"
              className="form-control"
              placeholder={props.equipe.motor}
              {...register('motor')}
            />
          </div>
          <div className="form-group mb-3">
            <label>Nome do Chassis</label>
            <input
              type="text"
              name="chassis"
              className="form-control"
              placeholder={props.equipe.chassi}
              {...register('chassi')}
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
