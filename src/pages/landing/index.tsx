import React from 'react';

import { Description, Name, PageLanding, Title, Button, FormContainer, HeaderContainer, CustomForm } from './style';
import { Form } from '@unform/web';
import Input from '../../shared/components/input';


interface Data {
  name: string
}

function Landing () {
  function handleSubmit (data: Data) {
    console.log(data)
  }


  return (
    <PageLanding>
      <HeaderContainer>
        <Title>Bem Vindo!!</Title>
        <Name>Chat Podre</Name>
        <Description>
          Esse chat não tem nada de especial.
        </Description>
      </HeaderContainer>
      <FormContainer>
        <CustomForm onSubmit={ handleSubmit }>
          <Input required name="dominio" type="text" label={ "Domínio" } placeholder={"oscabra"}/>
          <Input required name="name" type="text" label={ "Nome" } placeholder={"pesujo"}/>
          <Button type="submit">Entrar</Button>
        </CustomForm>
      </FormContainer>
    </PageLanding>
  )
}


export default Landing;
