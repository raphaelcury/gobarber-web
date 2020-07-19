import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  ScheduleHeader,
  ScheduleList,
  ScheduleItem,
} from './styles';

function Dashboard() {
  return (
    <Container>
      <ScheduleHeader>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>19 de Julho</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </ScheduleHeader>

      <ScheduleList>
        <ScheduleItem past>
          <strong>08:00h</strong>
          <span>Raphael Cury</span>
        </ScheduleItem>
        <ScheduleItem past available>
          <strong>09:00h</strong>
          <span>Em aberto</span>
        </ScheduleItem>
        <ScheduleItem available>
          <strong>10:00h</strong>
          <span>Em aberto</span>
        </ScheduleItem>
        <ScheduleItem>
          <strong>11:00h</strong>
          <span>Raphael Cury</span>
        </ScheduleItem>
      </ScheduleList>
    </Container>
  );
}

export default Dashboard;
