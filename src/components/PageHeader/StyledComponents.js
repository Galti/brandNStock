import styled from 'styled-components';

const Title = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  flex-flow: row;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
  padding: 70px 0;
  background-color: rgba(0,0,0,0.4);
  color: ${(props) => props.theme.BackgroundWhite};
`;

export {
    Title,
    Wrapper,
}
