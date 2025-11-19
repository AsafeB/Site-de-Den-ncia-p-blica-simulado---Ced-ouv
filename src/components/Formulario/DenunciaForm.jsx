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
  { name: "titulo", label: "Título", placeholder: "Título da denúncia" },
  { name: "descricao", label: "Descrição", placeholder: "Descreva o ocorrido", type: "textarea" },
  { name: "orgao", label: "Órgão Responsável", placeholder: "Nome do órgão" },
];

function DenunciaForm() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    data.id = Date.now();
    data.tipo = 'denuncia';
    data.status = 'pendente';
    const manifestacoes = JSON.parse(localStorage.getItem('manifestacoes')) || [];
    manifestacoes.push(data);
    localStorage.setItem('manifestacoes', JSON.stringify(manifestacoes));
    alert(`Manifestação enviada! ID: ${data.id} (simulado). Obrigado.`);
    navigate('/home');
  };

  return (
    <Formulario
      titulo="Fazer uma Denúncia"
      campos={campos}
      schema={schema}
      onSubmitAction={handleSubmit}
      botaoTexto="Enviar Denúncia"
    />
  );
}

export default DenunciaForm;