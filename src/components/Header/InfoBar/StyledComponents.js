import styled from 'styled-components';
import SearchIconLink from '../../../resources/images/seach-icon.png';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid ${(props) => props.theme.SecondaryColor};
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

const InfoA = styled.a`
  color: ${(props) => props.theme.TextColorMain};
  margin: 0 20px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  
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

const SearchBar = styled.input`
  width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url(${SearchIconLink});
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
`;

export {
  Wrapper,
  InfoA,
  InfoAForPhone,
  IconSpan,
    SearchBar,
}
