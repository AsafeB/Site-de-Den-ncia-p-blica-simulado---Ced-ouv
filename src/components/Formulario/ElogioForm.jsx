import React from "react";
import Formulario from "../Inputform";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  titulo: z.string().min(3, "Título obrigatório"),
  descricao: z.string().min(10, "Descrição mínima 10 chars"),
  orgao: z.string().min(3, "Órgão obrigatório"),
});

const campos = [
  { name: "titulo", label: "Título", placeholder: "Título do elogio" },
  { name: "descricao", label: "Descrição", placeholder: "Descreva o elogio", type: "textarea" },
  { name: "orgao", label: "Órgão Responsável", placeholder: "Nome do órgão" },
];

function ElogioForm() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    data.id = Date.now();
    data.tipo = 'elogio';
    data.status = 'pendente';
    const manifestacoes = JSON.parse(localStorage.getItem('manifestacoes')) || [];
    manifestacoes.push(data);
    localStorage.setItem('manifestacoes', JSON.stringify(manifestacoes));
    alert(`Manifestação enviada! ID: ${data.id} (simulado). Obrigado.`);
    navigate('/home');
  };

  return (
    <Formulario
      titulo="Fazer um Elogio"
      campos={campos}
      schema={schema}
      onSubmitAction={handleSubmit}
      botaoTexto="Enviar Elogio"
    />
  );
}

export default ElogioForm;