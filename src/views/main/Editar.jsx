import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Editar () {
    const { id } = useParams(); // vai obter o id do dado para ser edirtado
    const [name, setName] = useState('');
    const [ordem, setOrdem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nivelimportancia, setNivelImportancia] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8181/api/obterPorId/${id}`);
                
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name);
                    setOrdem(data.ordem);
                    setDescricao(data.descricao);
                    setNivelImportancia(data.nivelimportancia);
                
                } else {
                    console.error('Erro ao carregar dado:', response.statusText);
                }

            } catch (error) {
                console.error('Erro ao carregar dado:', error);
            }
            
        }
        fetchData();
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "ordem") {
            setOrdem(value);
        } else if (name === "descricao") {
            setDescricao(value);
        } else if (name === "nivelimportancia"){
            setNivelImportancia(value);
        }
    };

    const handleNivelImportanciaChange = (e) => {
        setNivelImportancia(e.target.value);
    };

    const handleEditar = (e) => {
        e.preventDefault();
        const url = `http://localhost:8181/api/atualizar/${id}`;
        fetch(url, {
            method: 'PUT',
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
                window.location.href = ('/exibir');
                alert('Dado editado com sucesso!');
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro durante a edição:', error);
            alert('Erro durante a edição. Por favor, tente novamente.');
        });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/exibir" className="btn btn-primary ml-auto">Voltar</Link>
                </div>

                <div className="col-md-12">
                    <h3 className="text-center mt-2">Editar dado</h3>

                    <div className="form">
                    <form onSubmit={handleEditar}>
                        <div>
                            <label>Nome</label>
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
                            <select className="form-control" name='nivelimportancia' value={nivelimportancia} onChange={handleNivelImportanciaChange}>
                                <option value="Tranquilo">Tranquilo</option>
                                <option value="Importante">Importante</option>
                                <option value="Urgente">Urgente</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Editar</button>
                    
                    </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editar;
