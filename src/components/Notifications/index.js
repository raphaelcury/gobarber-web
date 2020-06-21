import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento com fulano de tal</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
