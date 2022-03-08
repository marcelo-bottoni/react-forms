import { useState } from 'react';
import { ThemeProvider } from 'styled-components';


// * Demonstration Styles
// - Load the styles of the demonstration page
import DemoStyle from'./styles/ThemedStyle';


// * Form Styles
// - Load the styles of the form itself
import FormStyle from '../forms/styles/ThemedStyle';


// * Available Themes
// - Load the available themes
import theme1 from './styles/themes/Theme_1';
import theme2 from './styles/themes/Theme_2';


// * Sections
// - Load the demonstration sections
import { DemoIntro } from "./sections/Introduction";
import { DemoPrefixSuffix } from "./sections/PrefixSuffix";
import { DemoSignIn } from "./sections/SignIn";
import { DemoSignUp } from "./sections/SignUp";


export default function DemoPage ()
{
    // Create a variable to hold the current theme in use
    const [ theme, setTheme ] = useState(theme1);

    return (
        <ThemeProvider theme={theme}>
            <DemoStyle />
            <FormStyle />

            <div>
                <header>
                    <div>
                        <h1>React Forms</h1>
                        <span>By: <a href="#" target="_blank">Marcelo F Bottoni</a></span>
                    </div>

                    <div className="themes">
                        <small>Themes</small>
                        <span className={`${theme1 === theme ? 'active' : ''}`} onClick={() => { setTheme(theme1) }}>{theme1.title}</span>
                        <span className={`${theme2 === theme ? 'active' : ''}`} onClick={() => { setTheme(theme2) }}>{theme2.title}</span>
                    </div>
                </header>

                <main>
                    <DemoIntro />
                    <DemoPrefixSuffix />
                    <DemoSignIn />
                    <DemoSignUp />
                </main>
            </div>
        </ThemeProvider>
    );
}