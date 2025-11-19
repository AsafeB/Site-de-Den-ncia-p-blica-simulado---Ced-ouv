import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaIdCard,
  FaBirthdayCake,
  FaVenusMars
} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return alert('Senhas não coincidem');
    const newUser = { username, password, email, phone, address, cpf, birthDate, gender };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) return alert('Email já cadastrado');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro concluído!');
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        <div className="input-field">
          <input type="email" placeholder="Digite seu e-mail" required onChange={(e) => setEmail(e.target.value)} />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Digite sua senha" required onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Confirme sua senha" required onChange={(e) => setConfirmPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Digite seu nome completo" required onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Digite seu CPF" required onChange={(e) => setCpf(e.target.value)} />
          <FaIdCard className="icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Digite seu telefone" required onChange={(e) => setPhone(e.target.value)} />
          <FaPhone className="icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Digite seu endereço" required onChange={(e) => setAddress(e.target.value)} />
          <FaHome className="icon" />
        </div>
        <div className="input-field">
          <input type="date" required onChange={(e) => setBirthDate(e.target.value)} />
          <FaBirthdayCake className="icon" />
        </div>
        <div className="input-field">
          <select required onChange={(e) => setGender(e.target.value)} defaultValue="">
            <option value="" disabled>Selecione seu gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Prefiro não informar">Prefiro não informar</option>
          </select>
          <FaVenusMars className="icon" />
        </div>
        <button>Criar conta</button>
      </form>
    </div>
  );
};

export default Register;