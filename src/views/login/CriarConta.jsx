import { useState } from "react";
import { Link } from "react-router-dom";

function CriarConta() {

    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8181/login/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Conta criada com sucesso');
                window.location.href = "/";
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro ao criar cadastro:', error);
        });
    }

    return (
      <div className="mt-3">
        <div className="container">
          <h2>Criar conta</h2>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="nome">Nome:</label>
              <input type="text" 
                     className="form-control" 
                     id="nome" 
                     placeholder="Digite o seu nome..." 
                     name="nome" 
                     value={formData.nome}
                     onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="sobrenome">Sobre nome:</label>
                <input type="text" 
                    className="form-control" 
                    id="sobrenome" 
                    placeholder="sobre nome..." 
                    name="sobrenome" 
                    value={formData.sobrenome}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Digite o seu email..." 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="senha">Seha:</label>
              <input type="password" 
                    className="form-control" 
                    id="pwd" 
                    placeholder="Enter password" 
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange} 
                />
            </div>

            <div className="form-check mb-3">
            </div>
            
            <button type="submit" className="btn btn-primary">Criar Conta</button>
           
          </form>
        </div>

        <div className="container mt-5">
          <div className="cls-10">
            <h5>Jé tem uma conta?</h5>
            <Link to={"/"}>
              Fazer login
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default CriarConta;
  