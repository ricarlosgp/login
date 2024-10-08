import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

    :root { 
        font-size: 62.5%;
    }

    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${({ theme }) => theme.COLORS.WHIT}; 
        color: ${({ theme }) => theme.COLORS.WHITE}; 
        -webkit-font-smoothing: antialiased; 
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 20px;
        outline: none;
    }

    a { text-decoration: none; } 
    button, a { cursor: pointer; transition: filter 0,2s; } 
    button:hover, a:hover { filter: brightness(0,9); } 

`;
