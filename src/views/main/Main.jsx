import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
    const [name, setName] = useState('');
    const [ordem, setOrdem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [nivelimportancia, setNivelImportancia] = useState('Tranquilo');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "ordem") {
            setOrdem(value);
        } else if (name === "descricao") {
            setDescricao(value);
        }
    };

    const handleChangeNivelImportancia = (e) => {
        setNivelImportancia(e.target.value);
    }

    const handleCadastro = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8181/api/salvar';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                ordem: ordem,
                descricao: descricao,
                nivelimportancia: nivelimportancia
            })
        })
        .then(response => {
            if (response.ok) {
                setShowSuccessMessage(true);
                setName('');
                setOrdem('');
                setDescricao('');
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(() => {
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 7000);
        })
        .catch(error => {
            console.error('Erro durante o cadastro:', error);
            alert('Erro durante o cadastro. Por favor, tente novamente.');
        });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/exibir" className="btn btn-primary ml-auto">Ver Dados</Link>
                </div>

                <div className="col-md-12">
                    <h3 className="text-center mt-2">Criar dados</h3>

                    {showSuccessMessage && (
                        <div className="alert alert-success mt-1 text-center">
                            <strong>Sucesso!</strong> Dado cadastrado com sucesso!
                        </div>
                    )}

                    <div className="form">
                        <div className="form-group">
                            <form onSubmit={handleCadastro}>
                                <div>
                                    <label>Atividade</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu nome"
                                        name="name"
                                        onChange={handleChange}
                                        value={name}
                                    />
                                </div><br />

                                <div>
                                    <label>Ordem</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ordem da atividade"
                                        name="ordem"
                                        onChange={handleChange}
                                        value={ordem}
                                    />
                                </div><br />

                                <div>
                                    <label>Descrição</label><br />
                                    <textarea
                                        name="descricao"
                                        id="descricao"
                                        cols="50"
                                        rows="3"
                                        onChange={handleChange}
                                        value={descricao}
                                    ></textarea>
                                </div><br />

                                <div>
                                    <label>Nível de Importância</label><br />
                                    <select className="form-control" value={nivelimportancia} onChange={handleChangeNivelImportancia}>
                                        <option value="Tranquilo">Tranquilo</option>
                                        <option value="Importante">Importante</option>
                                        <option value="Urgente">Urgente</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
