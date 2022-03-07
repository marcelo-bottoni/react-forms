import { useState } from "react";
import { useForm } from "react-hook-form";

// * REACT FORMS : Fields
// - Load available fields from "react forms"
import { Input, InputNumber, InputDate, InputTime, InputPassword, Select } from '../../forms/fields/Basic';



export function DemoIntro ()
{
    // Section "visibility" and "show code" status
    const [ visible, setVisible ] = useState(true);
    const [ code, setCode ] = useState(false);

    // * FORM Configuration
    // - Configures the form of this section
    const { register, handleSubmit, formState: { errors }, watch } = useForm
    ({
    });

    // * FORM Submit
    // - Handles the form submission (if validated)
    function onSubmit (data: {})
    { 
        alert('Great! Your form was validated and submitted.');
        console.table(data);
    }

    return (
        <section>
            <div className="head">
                <div>
                    <h2>Introduction and some basic fields</h2>
                    <p>A quick introduction to the React Forms project</p>
                </div>

                <div>
                    { visible && <a onClick={() => { setCode(!code); }}><i className={`fa fa-code ${code ? "visible" : "hidden"}`}></i></a> }

                    <a onClick={() => { setVisible(!visible); }}><i className={`fa ${visible ? "fa-angle-up" : "fa-angle-down"}`}></i></a>
                </div>
            </div>

            <div className={`body ${visible ? "visible" : ""}`}>

                <div className={`form ${code ? "" : "visible"}`}>
                    <form>
                        <Input label="Text field, with a label" {...register("text")}/>
                        <InputNumber placeholder="Number field, with a placeholder" {...register("number")}/>
                        <InputDate label="Date field" {...register("date")} hint="With a hint text below it"/>
                        <InputTime label="Time field" {...register("time")} hint={<span>✋ Hints can be a string or an entire React Node</span>}/>
                        <InputPassword label="Password field" {...register("password")}/>

                        <Select label="Basic select field" {...register("select")}>
                            <option></option>
                            <option value="1">Option 01</option>
                            <option value="2">Option 02</option>
                            <option value="3">Option 03</option>
                        </Select>
                    </form>
                </div>

                <code className={`form-code ${code ? "visible" : ""}`}>
                    <pre>
                    {`
<form>
    <Input label="Text field, with a label" {...register("text")}/>
    <InputNumber placeholder="Number field, with a placeholder" {...register("number")}/>
    <InputDate label="Date field" {...register("date")} hint="With a hint text below it"/>
    <InputTime label="Time field" {...register("time")} hint={<span>✋ Hints can be a string or an entire React Node</span>}/>
    <InputPassword label="Password field" {...register("password")}/>
</form>
                    `}
                    </pre>
                </code>

                <div className="description">
                    <p><b>React Forms</b> is a project that combines <a href="https://react-hook-form.com" target="_blank">React Hook Forms</a> and <a href="https://styled-components.com" target="_blank">Styled Components</a> to create a powerfull, yet easy to use and adapt, soluction for working with forms in React.JS applications.</p>

                    <p>The React Hook Forms is used to perform the form's <b>state management</b> and <b>validation</b>.</p>
                    <p>And the Styled Components for <b>theming</b> and <b>customization</b>.</p>

                    <p>By combining these two resources, we can create both simple and complex/dynamic forms, with a minimum amount of code.</p>

                    <p>Check the next sections on this page to see several form examples, that demonstrate all the power of React Forms.</p>
                </div>

            </div>
        </section>
    );
}