import styled from 'styled-components';
import { Col as ColBootstrap} from 'react-bootstrap';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;

const Col = styled(ColBootstrap)`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;


export {
    Wrapper,
    Content,
    Col,
}
