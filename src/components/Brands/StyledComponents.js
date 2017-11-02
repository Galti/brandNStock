import styled from 'styled-components';

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
  background-color: rgba(0,0,0,0.7);
  color: ${(props) => props.theme.BackgroundWhite};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const BrandName = styled.span`
  font-size: 40px;
  font-style: italic;
  font-weight: bold;
  padding-bottom: 30px;
  text-transform: uppercase;
  
  
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const AgePriceSpan = styled.div`
  text-transform: lowercase;
  font-size: 25px;
  font-style: italic;
  margin: 0 15px;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    font-size: 16px;
  }
`;

const Characteristics = styled.div`
  display: flex;
  font-size: 25px;
  font-style: italic;
  text-align: center;
  flex-direction: column;
  
  & > div {
    font-size: 25px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    & > div {
      font-size: 16px;
    }
  }
`;

const MinorInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;


export {
    Wrapper,
    ImageSmall,
    InfoOverlay,
    PaginationContainer,
    BrandName,
    Characteristics,
    AgePriceSpan,
    MinorInfoWrapper,
}
