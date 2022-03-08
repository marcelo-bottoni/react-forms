// * Demonstration Styles
// - Load the styles of the demonstration page
import './styles/SimpleStyle.scss';


// * Form Styles
// - Load the styles of the form itself
import '../forms/styles/SimpleStyle.scss';


// * Demonstrantion Sections
// - Load the demonstration sections
import { DemoIntro } from "./sections/Introduction";
import { DemoPrefixSuffix } from "./sections/PrefixSuffix";
import { DemoSignIn } from "./sections/SignIn";
import { DemoSignUp } from "./sections/SignUp";


export default function SimpleDemo ()
{
    return (
        <>
            <div>
                <header>
                    <div>
                        <h1>React Forms</h1>
                        <span>By: <a href="#" target="_blank">Marcelo F Bottoni</a></span>
                    </div>
                </header>

                <main>
                    <DemoIntro />
                    <DemoPrefixSuffix />
                    <DemoSignIn />
                    <DemoSignUp />
                </main>
            </div>
        </>
    );
}