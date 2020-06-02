import {createGlobalStyle} from "styled-components";
import {primaryFont} from "./typography";
import {defaultTheme} from "./themes"

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}


body {
    margin: 0;
    font-family: ${primaryFont};
    padding:30px;
}

button{
    margin:5px
}

button:active{
    background-color:${defaultTheme.primaryColorActive};

}

main{
    width: 90%;
    margin: 0 auto;
}
`;