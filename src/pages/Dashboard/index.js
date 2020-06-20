import React from 'react';

import api from '~/services/api';
// import { Container } from './styles';

function Dashboard() {
  api.get('providers');
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}

export default Dashboard;
