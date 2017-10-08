import styled from 'styled-components';
import {IconButton} from 'material-ui';
import Menu from 'material-ui/Menu';
import {Link as CustomLink} from '../../shared-styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  margin-top: 20px;
  z-index: 100 !important;
  /* border: 1px solid red; */
  
  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  height: 56px;
  /* border: 1px solid green; */
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const Tabs = styled.span`
  display: inline-flex;
  width: 100%;
  padding: 20px 0;
  justify-content: flex-end;
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TabUnderline = styled.span`
  margin: 0 auto;
  width: ${(props) => props.selected ? '100%' : 0};
  border: 1px solid ${(props) => props.theme.Orange};
  transition-duration: ${(props) => props.theme.TransitionDuration};
  opacity: ${(props) => props.selected ? 1 : 0};
`;

const Tab = styled.span`
  display: flex;
  font-size: ${(props) => props.theme.HeaderSize};
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  height: 30px;
  
  &:hover ${TabUnderline} {
    width: 100%;
    opacity: 1;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  align-self: center;
  position: absolute;
  z-index: 100;
  
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const RightMenuButton = styled(IconButton)`
  display: none !important;
  align-self: center;
  position: absolute !important;
  right: 0;
  
  @media (max-width: 1000px) {
    display: flex !important;
  }
`;

const MdMenu = styled(Menu)`
  margin-top: 40px;
  width: 400px;
`;

const InfoA = styled.a`
  display: block;
  color: ${(props) => props.theme.TextColorMain} !important;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 16px;
  outline: none !important;
  padding: 4px 0 4px 15px;
  margin-top: 5px;
  
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.TextColorMain} !important;
  }
`;

const IconSpan = styled.span`
  margin-right: 15px;
  color: ${(props) => props.theme.SecondaryColor};
`;

const Link = styled(CustomLink)`
  margin: 0 auto;
  height: 56px;
  align-self: center;
  font-size: ${(props) => props.theme.HeaderSize};
  font-family: 'Propagan', sans-serif;
  color: ${(props) => props.theme.TextColorMain} !important;
  text-decoration: none !important;
  
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.TextColorMain};

  }
`;

export {
  Wrapper,
  Logo,
  Tabs,
  Tab,
  TabUnderline,
  HamburgerButton,
  RightMenuButton,
  MdMenu,
  InfoA,
  IconSpan,
  Link,
}
