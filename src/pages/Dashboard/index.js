import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>19 de Julho</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
    </Container>
  );
}

export default Dashboard;
