import { Link } from "react-router-dom";

function Login() {
    return (
      <div className="mt-3">
        <div className="container">
          <h2>Login</h2>
          <form action="/action_page.php">
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
            </div>
            <Link to={"/main"}>
                <button type="submit" className="btn btn-primary">Fazer login</button>
            </Link>
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
  