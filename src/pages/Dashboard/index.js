import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  ScheduleHeader,
  ScheduleList,
  ScheduleItem,
} from './styles';

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBr }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <ScheduleHeader>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleNextDay}>
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
