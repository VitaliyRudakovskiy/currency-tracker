import styled, { createGlobalStyle } from 'styled-components';

const fontColor = '#ffffff';
const backgroundColor = '#030304';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}   

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: ${backgroundColor};
    color: ${fontColor};
    min-height: 100vh;
    overflow-x: hidden;
}
`;

export const Wrapper = styled.div`
	min-height: 100%;
`;

export default GlobalStyles;
