import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 450px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
  padding: 40px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 25px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  &::placeholder { color: #fff; }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
`;

export const Error = styled.span`
  color: #ea4335;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;