import styled from "styled-components";
import {defaultTheme, typeScale} from "../utils";

const Button = styled.button`
border: none;
color: white;
padding: 12px 24px;
font-size: ${typeScale.paragraph};
font-family:${defaultTheme.primaryFont};
transition: background-color 0.2s linear, color 0.2s linear;

&:hover{
    background-color:${defaultTheme.primaryColorHover};
    color:${defaultTheme.textColorOnPrimary};
}

&.active{
    background-color:${defaultTheme.primaryColorActive};
    color:${defaultTheme.textColorOnPrimary};
}

&:focus{
    background-color:${defaultTheme.primaryColorFocus};
    color:${defaultTheme.textColorOnPrimary};
    outline:3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
}

&:disabled{
    background-color:${defaultTheme.primaryColorDisabled};
    color:${defaultTheme.textColorOnDisabled};
    cursor:not-allowed;
}
`
const PrimaryButton = styled(Button)`
background-color:${defaultTheme.primaryColor};
`;
const SecondaryButton = styled(Button)`
background-color:#22e67a;
`;
const TertiaryButton = styled(Button)`
background-color:white;
color:${defaultTheme.textColor};
`;

export default PrimaryButton;
export {TertiaryButton,SecondaryButton};