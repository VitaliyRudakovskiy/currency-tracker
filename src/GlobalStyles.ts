import styled, { createGlobalStyle } from 'styled-components';

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
    background-color: ${({ theme }) => theme.navbarBackground};
    color:${({ theme }) => theme.chartButtonTextColor};
    min-height: 100vh;
    overflow-x: hidden;
}
`;

export const Wrapper = styled.div`
	min-height: 100%;
`;

export default GlobalStyles;
