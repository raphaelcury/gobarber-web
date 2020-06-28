import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt_br from 'date-fns/esm/locale/pt-BR';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  async function loadNotifications() {
    const response = await api.get('notifications');
    const data = response.data.map((notification) => ({
      ...notification,
      dateDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: pt_br }
      ),
    }));
    setNotifications(data);
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  async function toggleRead(id) {
    await api.put(`notifications/${id}`);
    loadNotifications();
  }

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={toggleVisible} hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.dateDistance}</time>
              <button
                type="button"
                onClick={() => toggleRead(notification._id)}
              >
                Marcar como lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
