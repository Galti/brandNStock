import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.TextColorMain};
  color: ${(props) => props.theme.BackgroundWhite};
`;

const AboutUsTitle = styled.div`
  font-size: 22px;
  padding: 15px 0;
  text-align: center;
`;


const Copyright = styled.div`
  color: ${(props) => props.theme.SecondaryColor};
  text-align: center;
`;

const Contacts = styled.a`
  
`;

export {
  Wrapper,
  Copyright,
  AboutUsTitle,
}
