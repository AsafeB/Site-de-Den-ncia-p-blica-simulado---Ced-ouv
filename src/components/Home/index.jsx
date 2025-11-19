import React from 'react';
import styles from './styles.module.css';
import { FaBullhorn, FaThumbsDown, FaThumbsUp, FaComment, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qual tipo de manifestação deseja fazer?</h1>
      <p className={styles.subtitle}>Selecione um dos tipos de manifestação abaixo para falar com a Ouvidoria da Cedtec.</p>

      <div className={styles['container-button']}>
        <button className={`${styles['action-button']} ${styles.denuncia}`} onClick={() => navigate('/denuncia')}>
          <FaBullhorn className={styles.icon} />
          <h2>Fazer uma denúncia</h2>
          <p>Informe um ato ilícito praticado contra a administração pública.</p>
        </button>

        <button className={`${styles['action-button']} ${styles.reclamacao}`} onClick={() => navigate('/reclamacao')}>
          <FaThumbsDown className={styles.icon} />
          <h2>Fazer uma reclamação</h2>
          <p>Registre sua insatisfação com serviços ou atendimentos.</p>
        </button>

        <button className={`${styles['action-button']} ${styles.elogio}`} onClick={() => navigate('/elogio')}>
          <FaThumbsUp className={styles.icon} />
          <h2>Fazer um elogio</h2>
          <p>Reconheça um bom atendimento ou serviço prestado.</p>
        </button>

        <button className={`${styles['action-button']} ${styles.sugestao}`} onClick={() => navigate('/sugestao')}>
          <FaComment className={styles.icon} />
          <h2>Fazer uma sugestão</h2>
          <p>Envie ideias para melhorar os serviços oferecidos.</p>
        </button>

        <button className={`${styles['action-button']} ${styles.informacao}`} onClick={() => navigate('/informacao')}>
          <FaInfoCircle className={styles.icon} />
          <h2>Solicitar informação</h2>
          <p>Peça esclarecimentos ou dados de interesse público.</p>
        </button>
      </div>

      <button
        className={`${styles['action-button']} ${styles.sobreNos}`}
        onClick={() => navigate('/sobre-nos')}
      >
        <FaInfoCircle className={styles.sobreNosIcon} />
        <h2>Sobre Nós</h2>
        <p>Conheça mais sobre o Ced-Ouv LJ.</p>
      </button>
      </div>
  );
};

export default Home;
