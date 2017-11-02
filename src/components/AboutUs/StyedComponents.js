import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

const WrapperItem = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: row;
  padding: 30px 0;
`;

const ImageItem = styled(Avatar)`
  width: 120px !important;
  height: 120px !important;
  align-self: center;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    width: 70px !important;
    height: 70px !important;
  }
`;

const WrapperItemDescription = styled.div`
  width: 100%;
  margin-left: 40px;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding-right: 5px;
`;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 18px;
  }
`;

const DescriptionItems = styled.div`
  padding-left: 15px;
  
  &::before {
    content: '-';
  }
`;


export {
    WrapperItem,
    ImageItem,
    WrapperItemDescription,
    Title,
    DescriptionItems,
}
