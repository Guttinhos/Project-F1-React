import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Cadastro from '../components/Cadastro';

function AddEquipes() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>
                Adicionar Equipes
                <Link to={'/'} className="btn btn-primary btn-sm float-end">
                  Voltar
                </Link>
              </h4>
            </div>
            <Cadastro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEquipes;
