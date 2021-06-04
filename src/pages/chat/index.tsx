import React, { useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { Container} from './styles';

interface userData {
  name: string;
  workspace: string;
}

function Chat() {
  const history = useHistory();
  const { name, workspace } = useParams<userData>();
  const socket = io("ws://localhost:8080", {
    transports: ["websocket"] ,
    path: `/chat/${workspace}/${name}`
  });
  console.log(socket.connected);
  useEffect(() => {
    const name = localStorage.getItem('name');
    const workspace = localStorage.getItem('workspace');

    if(!name && !workspace) {

      history.push('/')
    }

  }, []);

  return <Container>
    <h1></h1>
  </Container>
}

export default Chat;
