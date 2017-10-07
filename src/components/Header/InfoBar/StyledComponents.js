import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.SecondaryColor};
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

const InfoA = styled.a`
  color: ${(props) => props.theme.TextColorMain};
  margin: 0 20px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 16px;
  
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.TextColorMain};
  }
`;

const InfoAForPhone = InfoA.extend`
  margin-right: 0;
`;

const IconSpan = styled.span`
  padding: 0 5px;
  color: ${(props) => props.theme.SecondaryColor};
`;



export {
  Wrapper,
  InfoA,
  InfoAForPhone,
  IconSpan,
}
