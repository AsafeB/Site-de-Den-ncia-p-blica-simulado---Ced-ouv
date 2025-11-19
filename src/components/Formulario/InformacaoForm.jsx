import React, { useState } from 'react';
import { FormContainer, Title, FormGroup, Label, Input, Button, Error } from "../Inputform/styles"; // Ajuste path se necessário

const InformacaoForm = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    const manifestacoes = JSON.parse(localStorage.getItem('manifestacoes')) || [];
    const found = manifestacoes.find(m => m.id == id); // == para string/number
    if (found) {
      setData(found);
      setError(null);
    } else {
      setError('ID não encontrado');
      setData(null);
    }
  };

  return (
    <FormContainer>
      <Title>Solicitar Informação</Title>
      <FormGroup>
        <Label>ID do Processo</Label>
        <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </FormGroup>
      <Button onClick={handleFetch}>Buscar</Button>
      {error && <Error>{error}</Error>}
      {data && (
        <div>
          <p><strong>Tipo:</strong> {data.tipo}</p>
          <p><strong>Título:</strong> {data.titulo}</p>
          <p><strong>Descrição:</strong> {data.descricao}</p>
          <p><strong>Órgão:</strong> {data.orgao}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>
      )}
    </FormContainer>
  );
};

export default InformacaoForm;