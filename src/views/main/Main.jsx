import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Main () {
    const [name, setName] = useState('');
    const [showSucessMessage, setShowSucessMessage] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleCadastro = () => {
        const url = 'http://localhost:8181/api/salvar';
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(response => {
            if (response.ok) {    
                setShowSucessMessage(true);
                setName(''); 
                return response.json();

            } else {
                throw new Error(response.statusText);
            }
        })
        .then(() => {
            setTimeout(() => {
                setShowSucessMessage(false);
            }, 7000);
        })
        .catch(error => {
            console.error('Erro durante o cadastro:', error);
            alert('Erro durante o cadastro. Por favor, tente novamente.');
         })
    }
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/exibir" className="btn btn-primary ml-auto">Ver Dados</Link>
                </div>

                <div className="col-md-12">
                    <h3 className="text-center mt-2">Criar dados</h3>

                    {showSucessMessage && (
                        <div className="alert alert-success mt-1 text-center">
                            <strong>Success!</strong> Dado cadastrado com sucesso!
                        </div>
                    )}

                    <div className="form">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" placeholder="Digite seu nome" onChange={handleChange} value={name}/>
                            <button type="button" className="btn btn-primary mt-3" onClick={handleCadastro}>Cadastrar</button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
