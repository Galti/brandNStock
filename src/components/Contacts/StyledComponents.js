import styled from 'styled-components';
import {Col} from 'react-bootstrap';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import Timelapse from 'react-icons/lib/md/timelapse';

const WrapperInformation = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: rgb(245,245,245);
  padding: 50px 0;
`;

const ColInformation = styled(Col)`
  display: flex;
  padding: 20px 0;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    justify-content: center;
    text-align: center;
    display: block;
  }
`;

const EmailIcon = styled(MdDrafts)`
  height: 28px;
  width: 28px;
  color: ${(props) => props.theme.Orange};
  margin: 10px 0;
`;

const PhoneIcon = styled(MdLocalPhone)`
  height: 28px;
  width: 28px;
  color: ${(props) => props.theme.Orange};
  margin: 10px 0;
`;

const TimelapseIcon = styled(Timelapse)`
  height: 28px;
  width: 28px;
  color: ${(props) => props.theme.Orange};
  margin: 10px 0;
`;

const TitleInformation = styled.div`
  padding: 5px 0;
  color: ${(props) => props.theme.TextColorMain};
  font-size: 17px;
  font-weight: bold;
  
`;

const WrapperInformationDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;


export {
    TitleInformation,
    ColInformation,
    WrapperInformation,
    WrapperInformationDescription,
    EmailIcon,
    PhoneIcon,
    TimelapseIcon,
}
