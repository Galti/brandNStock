import styled from 'styled-components';

const QuoteMessage = styled.div`
    padding: 30px 10px;
    font-size: 40px;
    font-family: Liana, sans-serif;
    background-color: rgba(0, 0, 0, 0.4);
    color: ${(props) => props.theme.BackgroundWhite};
`;

const Author = styled.div`
    text-align: right;
    font-size: ${(props) => props.theme.LayerTitleSize};
    padding-top: 15px;
`;


export {
    QuoteMessage,
    Author,
}
