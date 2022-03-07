import { useState } from "react";
import { useForm } from "react-hook-form";

// * REACT FORMS : Fields
// - Load available fields from "react forms"
import { Input, InputPassword } from '../../forms/fields/Basic';
import { vRequired, vMin } from "../../forms/validations/Validation";


export function DemoSignIn ()
{
    // Section "visibility" and "show code" status
    const [ visible, setVisible ] = useState(true);
    const [ code, setCode ] = useState(false);

    // * FORM Configuration
    // - Configures the form of this section
    const { register, handleSubmit, formState: { errors } } = useForm ();

    // * FORM Submit
    // - Handles the form submission
    function onSubmit (data: {})
    {
        alert('Super! You provided valid inputs to this form.');
    }


    return (
        <section>
            <div className="head">
                <div>
                    <h2>Sign In</h2>
                    <p>Check out this sign in form example</p>
                </div>

                <div>
                    { visible && <a onClick={() => { setCode(!code); }}><i className={`fa fa-code ${code ? "visible" : "hidden"}`}></i></a> }

                    <a onClick={() => { setVisible(!visible); }}><i className={`fa ${visible ? "fa-angle-up" : "fa-angle-down"}`}></i></a>
                </div>
            </div>

            <div className={`body ${visible ? "visible" : ""}`}>

                <div className={`form ${code ? "" : "visible"}`}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input label="Email" {...register("email", { required: vRequired(), min: vMin(10) })} error={errors.email}/>
                        <InputPassword label="Password" {...register("password", { required: vRequired() })} error={errors.password}/>

                        <button type="submit">Sign In</button>

                    </form>
                </div>

                <code className={`form-code ${code ? "visible" : ""}`}>
                    <pre>
                    {`
<form onSubmit={handleSubmit(onSubmit)}>

    <Input label="Email" {...register("email", { required: vRequired() })} error={errors.email}/>
    <InputPassword label="Password" {...register("password", { required: vRequired() })} error={errors.password}/>

    <button type="submit">Sign In</button>

</form>
                    `}
                    </pre>
                </code>

                <div className="description">
                    <p>Here we have a Sign In form made simple.</p>
                    <p>Both fields are mandatory, as usual in a sign in form. Once you submit, the form is validated and errors displayed on each field when necessary.</p>
                    <p>Test the form, and check it's code to see how simple and compact it is!</p>
                </div>

            </div>
        </section>
    );
}