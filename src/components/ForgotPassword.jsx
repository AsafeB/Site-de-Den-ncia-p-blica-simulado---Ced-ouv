import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Copie de Login.css

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      alert('Instruções de recuperação enviadas para o email (simulado). Senha resetada para "nova123".');
      // Simula reset: Atualiza senha no storage
      const updatedUsers = users.map(u => u.email === email ? { ...u, password: 'nova123' } : u);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    } else {
      alert('Email não encontrado');
    }
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar Senha</h1>
        <div className="input-field">
          <input type="email" placeholder="Digite seu e-mail" required onChange={(e) => setEmail(e.target.value)} />
          <FaEnvelope className="icon" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ForgotPassword;