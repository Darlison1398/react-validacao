import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ExibirDados() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchDados() {
            try {
                const response = await fetch('http://localhost:8181/api');
                if (response.ok) {
                    const data = await response.json();
                    setDados(data);
                } else {
                    console.error('Erro ao carregar dados da API:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao carregar dados da API:', error);
            }
        }

        fetchDados();
    }, []);


    const handleExcluir = async (id) => {
        try {
            const urlEx = `http://localhost:8181/api/excluir/${id}`;
            const response = await fetch( urlEx, {
                method: 'DELETE',             
            });
            if (response.ok) {
                const newData = dados.filter(item => item.id !== id );
                setDados(newData);
                console.log("Dado excluído com sucesso!");
            } else {
                console.error('Erro ao excluir dado:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao excluir dado:', error);
        }
    }
    


    return (
        <div className="container mt-5">
            <div className="row">

                <div className="d-flex justify-content-end mb-3">
                    <Link to="/main" className="btn btn-primary ml-auto">Cadastrar Dados</Link>
                </div>

                <div className="col-md-12">
                    <h3 className="text-center mt-2">Veja seus dados</h3>
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Atividade</th>
                                <th>Ordem</th>
                                <th>Descrição</th>
                                <th>Nivel importância</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.ordem}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.nivelimportancia}</td>
                                    <td>
                                        <Link to={`/editar/${item.id}`}>
                                            <FontAwesomeIcon icon={faPencil} style={{ marginRight: '10px' }} />
                                        </Link>
                                        <FontAwesomeIcon icon={faTrash} style={{color: 'red', marginLeft: '10px'}} onClick={() => handleExcluir(item.id)}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ExibirDados;
