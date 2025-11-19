import React from 'react';
import './SobreNos.css';

const SobreNos = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre o Ced-Ouv LJ</h1>
      <p className="sobre-subtitle">Bem-vindo ao Ced-Ouv LJ, um sistema de ouvidoria digital projetado para facilitar manifestações públicas de forma simples e eficiente.</p>

      <section className="sobre-section">
        <h2>Missão</h2>
        <p>Nosso objetivo é proporcionar uma plataforma segura e acessível para que cidadãos registrem denúncias, reclamações, elogios, sugestões e solicitações de informação sobre serviços públicos. Inspirado no e-Ouv do Governo do Espírito Santo, o Ced-Ouv LJ promove transparência e accountability na administração pública.</p>
      </section>

      <section className="sobre-section">
        <h2>Equipe</h2>
        <p>O sistema foi desenvolvido por uma equipe de estudantes do 2º ano:</p>
        <table className="sobre-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asafe B.</td>
              <td>Desenvolvedor Frontend</td>
            </tr>
            <tr>
              <td>Davi M.</td>
              <td>Desenvolvedor Backend</td>
            </tr>
            <tr>
              <td>Antônio G.</td>
              <td>Designer e Testador</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="sobre-section">
        <h2>Como Funciona</h2>
        <p>O Ced-Ouv LJ permite que usuários se registrem, façam login e enviem manifestações em categorias específicas. Os dados são processados localmente para simulação (em produção, seriam armazenados em banco de dados). Inspirado na apostila de Banco de Dados do Prof. Regilan Meira (IFBA), o sistema demonstra conceitos de modelagem relacional e SQL de forma prática.</p>
      </section>

      <section className="sobre-section">
        <h2>Estatísticas (Fictícias)</h2>
        <p>Desde o lançamento:</p>
        <ul>
          <li>Manifestações atendidas: 10.000</li>
          <li>Usuários cadastrados: 5.000</li>
          <li>Tempo médio de resposta: 48 horas</li>
        </ul>
      </section>
    </div>
  );
};

export default SobreNos;