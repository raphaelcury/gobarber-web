import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const ScheduleHeader = styled.header`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  button {
    border: 0;
    background: none;
  }

  strong {
    margin: 0 15px;

    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ScheduleList = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const ScheduleItem = styled.li`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    font-size: 18px;
    font-weight: normal;
    color: ${(props) => (props.available ? '#999' : '#7159c1')};
    margin-bottom: 5px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: normal;
    color: ${(props) => (props.available ? '#999' : '#666')};
  }
`;
