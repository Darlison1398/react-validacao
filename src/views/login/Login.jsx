import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8181/login/acessar", {
          email: email,
          senha: senha
        });
    
        console.log(email);
        console.log(senha);
        //console.log(response.data);
        if (response.status === 200) {
          console.log("login efetuado com sucesso");
          window.location.href = '/main';
        } 
        
        
      } catch (error) {

        //alert("Erro ao fazer login");
        setShowSuccessMessage(true);
        setEmail('');
        setSenha('');
        console.log(error);
        
      } finally {
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    }
    
    




    return (
      <div className="mt-3">
        <div className="container">
          <h2>Login</h2>

          {showSuccessMessage && (
            <div className="alert alert-danger mt-1 text-center">
                <strong>Erro!</strong> Erro ao tentar fazer login!
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input 
                type="password" 
                className="form-control" 
                id="senha" 
                placeholder="Enter password" 
                name="senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="form-check mb-3">
            </div>

            <button type="submit" className="btn btn-primary">Fazer login</button>
           
          </form>
        </div>

        <div className="container mt-5">
          <div className="cls-10">
            <h5>Ainda não tem uma conta?</h5>
            <Link to={"/criarConta"}>
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  