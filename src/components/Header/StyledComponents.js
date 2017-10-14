import styled from 'styled-components';
import {Link as CustomLink} from '../shared-styled-components';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: -70px;
  background-color: ${(props) => props.theme.BackgroundWhite};
  box-shadow: 0 4px 5px #000;
  z-index: 100;
  
  @media (max-width: 1000px) {
    top: 0;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 15px 15px 0 15px;
  
  @media (max-width: 1000px) {
    padding: 0 5px;
  }
`;

const MenuItemMobile = styled.span`
  width: 100%;
  padding: 5px;
  background-color: ${(props) => props.selected ? '#000' : ''};
  color: ${(props) => props.selected ? '#fff' : props.theme.TextColorMain};
  
  & > a {
    align-self: center;
    font-size: ${(props) => props.theme.HeaderSize};
    font-family: 'Propagan', sans-serif;
    color: ${(props) => props.theme.TextColorMain} !important;
    text-decoration: none;
  }
`;

const LogoLink = styled(CustomLink)`
  display: none !important;
  padding: 15px 0;
  
  @media (max-width: 480px) {
    display: block !important;
  }
`;

const LeftMenuLink = styled(CustomLink)`
  width: 100%;
  color: ${(props) => props.selected ? '#fff' : props.theme.TextColorMain};
  display: block;
  font-family: 'Propagan', sans-serif;
  
  &:hover {
    color: ${(props) => props.selected ? '#fff' : props.theme.TextColorMain};
    text-decoration: none !important;
  }
`;

const SearchWindowWrapper = styled(Dialog)`
`;




export {
    Wrapper,
    Content,
    MenuItemMobile,
    LogoLink,
    LeftMenuLink,
    SearchWindowWrapper,
}
