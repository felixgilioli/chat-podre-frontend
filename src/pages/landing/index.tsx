import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/input';

import { Description, Name, PageLanding, Title, Button, FormContainer, HeaderContainer, CustomForm } from './styles';

interface Data {
  name: string;
  workspace: string;
}

function Landing () {
  const history = useHistory();

  useEffect(() => {
    const name = localStorage.getItem('name');
    const workspace = localStorage.getItem('workspace');

    if(name && workspace) {

      history.push(`chat/${workspace}/${name}`)
    }
  }, [])

  function handleSubmit (data: Data) {
    localStorage.setItem('name', data.name);
    localStorage.setItem('workspace', data.workspace);

    history.push(`chat/${data.workspace}/${data.name}`)
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
