import React from 'react';

import { Description, Name, PageLanding, Title, Button, FormContainer } from './style';
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
      <Title>Bem Vindo!!</Title>
      <Name>Chat Podre</Name>
      <Description>
        Esse chat não tem nada de especial.
      </Description>
      <FormContainer>
        <Form onSubmit={ handleSubmit }>
          <Input name="dominio" type="text" label={"Dominio"}/>
          <Input required name="name" type="text" label={"Nome"}/>
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
    </PageLanding>
  )
}


export default Landing;
