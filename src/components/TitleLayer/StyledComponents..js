import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`;

const Title = styled.span`
    display: flex;
    justify-content: center;
	font-size: ${(props) => props.theme.LayerTitleSize};
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.TextColorMain};
	text-transform: uppercase;
	
	@media (max-width: 480px) {
      font-size: ${(props) => props.theme.LayerTitleSizeMobile};
    }
`;

const HorizontalLine = styled.hr`
    background-color: ${(props) => props.theme.Orange};
    height: 2px;
    width: 40px;
    margin: 27px auto 34px;
    border: none;
`;


export {
    Wrapper,
    Title,
    HorizontalLine
}
