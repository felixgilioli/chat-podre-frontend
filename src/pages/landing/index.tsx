import React from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

import Input from '../../shared/components/input';

import { Description, Name, PageLanding, Title, Button, FormContainer, HeaderContainer, CustomForm } from './styles';

interface Data {
  name: string;
  workspace: string;
}

function Landing () {
  const history = useHistory();

  function handleSubmit (data: Data) {
    const socket = new WebSocket(`ws://localhost:8080/chat/${data.workspace}/${data.name}`);
    setTimeout(() => socket.send("a;sdlkjfja;sd"), 2000)

    // const socket = io("ws://localhost:8080", {
    //   transports: ["websocket"],
    //   path: `/chat/${data.workspace}/${data.name}`
    // });
    // socket.emit("hello");
    // socket.send("sfkasdkfs");

    history.push(`chat/${data.workspace}?name=${data.name}`)
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
          <Input required name="workspace" type="text" label={ "Domínio" } placeholder={"oscabra"}/>
          <Input required name="name" type="text" label={ "Nome" } placeholder={"pesujo"}/>
          <Button type="submit">Entrar</Button>
        </CustomForm>
      </FormContainer>
    </PageLanding>
  )
}


export default Landing;
