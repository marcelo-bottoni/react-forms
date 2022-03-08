import { createGlobalStyle } from 'styled-components';

// Override the "DefaultTheme" available in the "styled-components"
// This will avoid errors from typescript (complaining about unknown types)
declare module 'styled-components'
{
    export interface DefaultTheme
    {
        title: string,

        scheme: string,

        colors:
        {
            primary: string,
            secondary: string,
            tertiary: string,
            
            black: string,
            darker: string,
            dark: string,
            light: string,
            lighter: string,
            white: string,

            error: string,
            success: string,
            warning: string,
            info: string,

            background: string,
            header: string,
            section: string,
            description: string,
            border: string
        },

        form:
        {
            field:
            {
                idle:
                {
                    background: string,
                    border: string,
                    border_radius: string,
                    shadow: string
                },

                focus:
                {
                    background: string
                }
            }
        }
    }
}


export default createGlobalStyle`

    // Global Resets
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body
    {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        min-height: 100vh;
        background: ${props => props.theme.colors.background};

        header {
            position: fixed; top: 0; left: 0; right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            background: ${props => props.theme.colors.header};
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            padding: 10px;
            z-index: 1000;

            > div {
                display: flex; flex-direction: column;

                h1 { color: ${props => props.theme.colors.primary}; }
                span { color: ${props => props.theme.colors.dark}; }
                span a { color: ${props => props.theme.colors.secondary}; }
            }

            > div.themes {
                display: flex;
                flex-direction: row;
                align-items: center;

                color: ${props => props.theme.colors.dark};

                small { text-transform: uppercase; }

                span
                {
                    border: 1px ${props => props.theme.colors.border} solid;
                    border-radius: 20px;
                    padding: 5px 15px;
                    margin-left: 10px; cursor: pointer;

                    &.active
                    {
                        background: ${props => props.theme.colors.primary};
                        color: ${props => props.theme.colors.white};
                    }
                }
            }

            h1 {
                text-transform: uppercase;
                font-size: 22px;
                line-height: 22px;
            }

            span { font-size: 12px; }
            span a {
                text-decoration: none;
                color: ${props => props.theme.colors.darker} !important;

                &:hover { text-decoration: underline; }
            }
        }

        main {
            display: flex;
            flex-direction: column;

            width: 90%;
            max-width: 1280px;
            margin: 0 auto;
            padding-top: 100px;


            section {
                display: flex;
                flex-direction: column;
                min-width: 100%;
                margin-bottom: 60px;

                background: ${props => props.theme.colors.section};
                box-shadow: 2px 2px 6px rgba(0,0,0,0.075);
                border-radius: 10px;

                > .head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    padding: 7px 12px;
                    border-bottom: 1px ${props => props.theme.colors.border} solid;
                    color: ${props => props.theme.colors.darker};

                    a { font-size: 18px; margin-right: 10px; margin-left: 5px; cursor: pointer; }
                    a i { opacity: 1; &.hidden { opacity: 0.3; } }
                }

                > .body {
                    display: flex;
                    height: auto;
                    max-height: 0px;
                    overflow: hidden;

                    transition: max-height 0.3s ease;
                    color: ${props => props.theme.colors.darker};

                    &.visible { max-height: 10000px; }

                    > .form { width: 60%; display: none; flex-direction: column; padding: 20px 25px; flex: 1; &.visible { display: flex; } }
                    > .form button[type=submit] { text-transform: uppercase; padding: 10px 25px; border: none; background: ${props => props.theme.colors.primary}; color: ${props => props.theme.colors.white}; cursor: pointer; border-radius: 5px; }

                    > .form-code { width: 60%; display: none; flex-direction: column; padding: 20px 25px; flex: 1; &.visible { display: flex; } overflow-x: scroll; }

                    > .description { width: 40%; padding: 20px 25px; background-color: ${props => props.theme.colors.description}; border-left: 1px ${props => props.theme.colors.border} solid; border-bottom-right-radius: 10px; }
                    > .description p { margin-bottom: 20px; font-size: 17px; font-weight: 200; b { font-weight: 400; } }
                    > .description a { color: ${props => props.theme.colors.primary}; }
                }
            }
        }
    }
`;