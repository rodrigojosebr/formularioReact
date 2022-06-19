import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  align-items: center;
  border: 3px solid ${props => props.selected ? '#25CD89' : '#16195C'};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  padding: 20px;
  margin-bottom: 15px;

  &:hover {
    border: 3px solid #496459;
  }
`;

export const Icon = styled.div`
  align-items: center;
  border-radius: 50%;
  background-color: #191A59;
  display: flex;
  font-size: 25px; 
  height: 60px;
  justify-content: center;
  width: 60px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  color: #B8B8D4;
  font-size: 14px;
`;
