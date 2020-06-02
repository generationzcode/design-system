import React from "react"
import ReactDOM from "react-dom"
import PrimaryButton, { TertiaryButton,SecondaryButton } from "./components/button"
import { GlobalStyle } from "./utils"
const App = ()=>(
    <div>
        <PrimaryButton disabled="disabled" >Important</PrimaryButton>
        <SecondaryButton>less important</SecondaryButton>
        <TertiaryButton>not important yet not entirely unimportant</TertiaryButton>
        <GlobalStyle />
    </div>
);
ReactDOM.render(<App/>,document.querySelector("#root"));