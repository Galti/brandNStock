import styled from 'styled-components';
import { Col, Pagination as BootstrapPagination } from 'react-bootstrap';

const Wrapper = styled.div`

`;

const ImageSmall = styled.img`
  height: 100%;
  width: 100%;
  max-height: 490px;
  object-fit: contain;
`;

const InfoOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  opacity: ${(props) => props.isHovered ? 1 : 0};
  transition-duration: ${(props) => props.theme.TransitionDuration};
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.4);
  color: ${(props) => props.theme.BackgroundWhite};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const BrandName = styled.span`
  font-size: 35px;
  font-family: 'Propagan', sans-serif;
  padding-bottom: 30px;
  text-transform: uppercase;
  
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const AgePriceSpan = styled.span`
  text-transform: lowercase;
  font-size: 25px;
  font-style: italic;
  
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 16px;
  }
`;

const Characteristics = styled.span`
  font-size: 30px;
  font-style: italic;
  text-align: center;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 16px;
  }
`;


export {
    Wrapper,
    ImageSmall,
    InfoOverlay,
    PaginationContainer,
    BrandName,
    Characteristics,
    AgePriceSpan,
}
