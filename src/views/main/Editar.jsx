import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Editar () {
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/exibir" className="btn btn-primary ml-auto">Voltar</Link>
                </div>

                <div className="col-md-12">
                    <h3 className="text-center mt-2">Editar dado</h3>

                    <div className="form">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" placeholder="Digite seu nome"  />
                            <button type="button" className="btn btn-primary mt-3" >Editar dado</button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editar;
