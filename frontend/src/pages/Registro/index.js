import React from 'react';

import { Container,Inicio,Final,Header,Conteudo,Termos} from './styles';
import { Form, Input } from "@rocketseat/unform";
import { Link } from 'react-router-dom';
import Logo from '../../assets/cart.png';
import Foto from '../../assets/Foto.png';
import * as Yup from "yup";

const schema = Yup.object().shape({
    nome: Yup.string().required("O Nome é obrigatório"),
    email: Yup.string()
      .email("Insira um email válido")
      .required("o e-mail é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria"),
    Whatsapp: Yup.number().required("O Número do whatsapp é obrigatório"),
    CPF: Yup.number().required("O CPF é obrigatório")

});

function Registro() {

    function handleSubmit(data){
        console.log(data);
    }

  return (
  
   <Container>
       <Inicio>
            <Header>
                <img src={Logo} alt="logo"/>
                <text>MB</text>
                <h1>Meu Brechó</h1>
            </Header>


            <h2> Compre mais e pague menos</h2>

            <Conteudo>   
                
                <img src={Foto} alt="foto" />

            </Conteudo>  
       </Inicio>



       <Final>
           <Link to="/login">Acessar</Link>
           <h2>Registra-se</h2>

            <Form  schema={schema} onSubmit={handleSubmit}>
                <Input name="nome" type="text" placeholder="Seu nome" />
                <Input name="Whatsapp" type="text" maxlength="11" pattern="([0-9]{11})" placeholder="Seu Whatsapp" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="CPF" type="text" maxlength="11" pattern="([0-9]{11})" placeholder="Seu CPF" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                    /> 
                <button type="submit">Cadastrar</button> 
            </Form>
            <Termos>ao se cadastrar, você aceita os  <Link to="/termos">Termos de uso</Link></Termos>

       </Final>
       
   </Container>
  );
}

export default Registro;