import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword";
import DenunciaForm from "../Formulario/DenunciaForm";
import ReclamacaoForm from "../Formulario/ReclamacaoForm";
import ElogioForm from "../Formulario/ElogioForm";
import SugestaoForm from "../Formulario/SugestaoForm";
import InformacaoForm from "../Formulario/InformacaoForm";
import SobreNos from "../SobreNos";

export default function RouterComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/denuncia" element={<DenunciaForm />} />
        <Route path="/reclamacao" element={<ReclamacaoForm />} />
        <Route path="/elogio" element={<ElogioForm />} />
        <Route path="/sugestao" element={<SugestaoForm />} />
        <Route path="/informacao" element={<InformacaoForm />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}