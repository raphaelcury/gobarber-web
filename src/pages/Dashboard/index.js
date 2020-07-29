import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  ScheduleHeader,
  ScheduleList,
  ScheduleItem,
} from './styles';

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [fullSchedule, setFullSchedule] = useState([]);

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBr }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', { params: { date } });
      setFullSchedule([...response.data]);
    }
    loadSchedule();
  }, [date]);

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
        {fullSchedule.map((time) => (
          <ScheduleItem
            key={time.time}
            past={time.past}
            available={time.available}
          >
            <strong>{time.time}</strong>
            <span>{time.name ? time.name : 'Em aberto'}</span>
          </ScheduleItem>
        ))}
      </ScheduleList>
    </Container>
  );
}

export default Dashboard;
