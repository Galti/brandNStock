import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.TextColorMain};
  color: ${(props) => props.theme.BackgroundWhite};
  padding: 0 15px;
  padding-bottom: 15px;
`;

const AboutUsTitle = styled.div`
  font-size: 22px;
  padding: 15px 0;
  text-align: center;
`;

const ContactsTitle = AboutUsTitle.extend`
  font-size: 22px;
  padding: 15px 0;
  text-align: left;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: ${(props) => props.theme.SecondaryColor};
  text-align: center;
  margin-top: 15px;
`;

const WrapperFooterLogo = styled.div`
  position: absolute !important;
  display: flex;
  justify-content: center;
  float: left;
  height: 188px;
  width: 100%;
  margin-left: -15px;
`;



export {
  Wrapper,
  Copyright,
  AboutUsTitle,
  WrapperFooterLogo,
  ContactsTitle,
}
