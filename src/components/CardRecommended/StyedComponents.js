import styled from 'styled-components';
import { Link as LinkShared } from '../shared-styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 370px;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.md}) {
    width: 300px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.sm}) {
    width: 345px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    width: 480px;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 370px;
  height: 250px;
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.md}) {
    width: 300px;
    height: 200px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.sm}) {
    width: 345px;
    height: 233px;
  }
  
  @media (max-width: ${(props) => props.theme.BootstrapSizes.xs}) {
    width: 370px;
    height: 250px;
  }
`;

const Link = styled(LinkShared)`
  display: block;
  font-size: ${(props) => props.theme.LayerRecommendedBrandNameSize};
  font-weight: bold;
  color: ${(props) => props.theme.OrangeLayerRecommendedBrandName};
  margin: 12px 0;
  transition-duration: ${(props) => props.theme.TransitionDuration};
  
  &:hover {
    color: ${(props) => props.theme.OrangeLayerRecommendedBrandNameHover};
  }
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

export {
    Wrapper,
    Image,
    Link,
    Price,
    Quantity,
}
