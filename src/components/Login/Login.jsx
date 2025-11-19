import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login bem-sucedido!');
      navigate('/home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Bem-Vindo</h1>
        <div className="input-field">
          <input type="email" placeholder="Digite seu e-mail" required onChange={(e) => setEmail(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Digite sua senha" required onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label><input type="checkbox" /> Lembre de mim</label>
          <a href="/forgot-password">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>Não tem uma conta? <a href="/register">Cadastre-se agora!!</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;