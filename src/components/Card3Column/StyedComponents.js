import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 370px;
  position: relative;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.md}) {
    max-width: 300px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.sm}) {
    max-width: 345px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    max-width: 480px;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 370px;
  max-height: 250px;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.md}) {
    max-width: 300px;
    max-height: 200px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.sm}) {
    max-width: 345px;
    max-height: 233px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    max-width: 370px;
    max-height: 250px;
  }
`;

const Feature = styled.div`
  display: block;
  font-size: ${(props) => props.theme.LayerRecommendedBrandNameSize};
  font-weight: bold;
  color: ${(props) => props.theme.OrangeLayerRecommendedBrandName};
  margin: 12px 0;
  transition-duration: ${(props) => props.theme.TransitionDuration};
  
  // &:hover {
  //   color: ${(props) => props.theme.OrangeLayerRecommendedBrandNameHover};
  // }
`;

const Price = styled.div`
  display: block;
  font-size: ${(props) => props.theme.LayerRecommendedPriceSize};
  font-weight: bold;
  color: ${(props) => props.theme.TextColorMain};
  line-height: 1.47059;
  margin-bottom: 18px;
`;

const Quantity = styled.div`
  display: block;
  color: ${(props) => props.theme.SecondaryColor};
  margin-bottom: 18px;
`;

const Description = styled.div`
  height: 100%;
  margin-bottom: 50px;
`;

export {
    Wrapper,
    Image,
    Feature,
    Price,
    Quantity,
    Description,
}
