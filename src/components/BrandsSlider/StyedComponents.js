import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px;
  height: 250px;
  margin-bottom: 40px;
`;

const SliderItem = styled.div`
  padding: 0 5px;
  height: 150px;
  width: 200px;
  display: flex;
  object-fit: cover !important;
`;

const ArrowWrapper = styled.div`
  display: flex !important;
  align-items: center;
  height: 60px;
  background-color: #fff;
  z-index: 2;
`;

const Image = styled.img`
  max-height: 150px;
  height: 100%;
  max-width: 200px;
`;

const ArrowNext = styled.img`
  position: absolute;
  width: 100%;
`;

const ArrowPrev = ArrowNext.extend`
  transform: rotate(180deg);
`;


export {
    Wrapper,
    SliderItem,
    ArrowWrapper,
    Image,
    ArrowNext,
    ArrowPrev,
}
