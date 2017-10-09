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
`;

const WrapperItemDescription = styled.div`
  width: 100%;
  margin-left: 40px;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
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
