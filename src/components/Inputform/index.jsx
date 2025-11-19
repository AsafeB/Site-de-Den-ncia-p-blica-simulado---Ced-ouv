  import React from "react";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  Error
} from "../Inputform/styles";

  const defaultSchema = z.object({
    nome: z.string().min(3, "Campo obrigatório (mín. 3 caracteres)").optional(),
    email: z.string().email("Digite um e-mail válido").optional(),
    senha: z.string().min(6, "Mínimo de 6 caracteres").optional(),
  });

  const Formulario = ({
    titulo = "Formulário",
    campos = [],
    schema = defaultSchema,
    onSubmitAction,
    botaoTexto = "Enviar",
  }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
      if (onSubmitAction) onSubmitAction(data);
      reset();
    };

    return (
      <FormContainer>
        <Title>{titulo}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {campos.map((campo, index) => (
            <FormGroup key={index}>
              <Label htmlFor={campo.name}>{campo.label}</Label>
              {campo.type === 'textarea' ? (
                <textarea
                  id={campo.name}
                  placeholder={campo.placeholder || ""}
                  {...register(campo.name)}
                  style={{ width: '100%', height: '100px', padding: '20px 25px', backgroundColor: 'transparent', border: '2px solid rgba(255, 255, 255, 0.2)', borderRadius: '40px', fontSize: '16px', color: '#fff' }}
                />
              ) : (
                <Input
                  id={campo.name}
                  type={campo.type || "text"}
                  placeholder={campo.placeholder || ""}
                  {...register(campo.name)}
                />
              )}
              {errors[campo.name] && (
                <Error>{errors[campo.name]?.message}</Error>
              )}
            </FormGroup>
          ))}
          <Button type="submit">{botaoTexto}</Button>
        </form>
      </FormContainer>
    );
  };

  export default Formulario;