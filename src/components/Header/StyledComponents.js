import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 160px;
  display: flex;
  border: 1px solid red;
  justify-content: center;
`;

const Content = styled.div`
  border: 1px solid green;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 15px;
`;

export {
    Wrapper,
    Content,
}
