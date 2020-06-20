import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #eee;
    }
    a {
      color: #7159c1;
    }
  }
`;

export const Profile = styled.aside`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    strong {
      margin-bottom: 2px;
      color: #333;
    }
    a {
      color: #999;
      font-size: 12px;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;
