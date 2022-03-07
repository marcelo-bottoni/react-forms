import { useState } from "react";
import { useForm } from "react-hook-form";

// * REACT FORMS : Fields
// - Load available fields from "react forms"
import { Input, InputDate, InputPassword } from '../../forms/fields/Basic';
import { vPassword, vPasswordConfirm, vRequired } from "../../forms/validations/Validation";


export function DemoSignUp ()
{
    // Section "visibility" and "show code" status
    const [ visible, setVisible ] = useState(true);
    const [ code, setCode ] = useState(false);

    // * FORM Configuration
    // - Configures the form of this section
    const { register, watch, handleSubmit, formState: { errors } } = useForm ();

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
                    <h2>Sign Up</h2>
                    <p>Check out this sign up form example</p>
                </div>

                <div>
                    { visible && <a onClick={() => { setCode(!code); }}><i className={`fa fa-code ${code ? "visible" : "hidden"}`}></i></a> }

                    <a onClick={() => { setVisible(!visible); }}><i className={`fa ${visible ? "fa-angle-up" : "fa-angle-down"}`}></i></a>
                </div>
            </div>

            <div className={`body ${visible ? "visible" : ""}`}>

                <div className={`form ${code ? "" : "visible"}`}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input label="Name" {...register("name", { required: vRequired() })} error={errors.name}/>
                        <InputDate label="Birthdate" {...register("birthdate", { required: vRequired() })} error={errors.birthdate}/>

                        <Input label="Email" {...register("email", { required: vRequired() })} error={errors.email}/>
                        <InputPassword label="Password" showStrength={true} {...register("password", { required: vRequired(), validate: { password: vPassword({min: 8, numbers: true, letters: true}) } })} error={errors.password}/>
                        <InputPassword label="Confirm Password" showStrength={true} {...register("password_confirm", { required: vRequired(), validate: { password: vPassword({min: 8, numbers: true, letters: true}), confirm: vPasswordConfirm(watch("password")) } })} error={errors.password_confirm}/>

                        <button type="submit">Sign Up</button>

                    </form>
                </div>

                <code className={`form-code ${code ? "visible" : ""}`}>
                    <pre>
                    {`
<form onSubmit={handleSubmit(onSubmit)}>

    <Input label="Name" {...register("name", { required: vRequired() })} error={errors.name}/>
    <InputDate label="Birthdate" {...register("birthdate", { required: vRequired() })} error={errors.birthdate}/>

    <Input label="Email" {...register("email", { required: vRequired() })} error={errors.email}/>
    <InputPassword label="Password" showStrength={true} {...register("password", { required: vRequired(), validate: { password: vPassword({min: 8, numbers: true, letters: true}) } })} error={errors.password}/>
    <InputPassword label="Confirm Password" showStrength={true} {...register("password_confirm", { required: vRequired(), validate: { password: vPassword({min: 8, numbers: true, letters: true}), confirm: vPasswordConfirm(watch("password")) } })} error={errors.password_confirm}/>

    <button type="submit">Sign Up</button>

</form>
                    `}
                    </pre>
                </code>

                <div className="description">
                    <p>Here we have a commonly used Sign Up form.</p>
                    <p>It requests the user some basic identification data and email and password.</p>
                    
                    <p>Check the password fields! See that the field has a built in <b>password strength check</b>.</p>
                    <p>Still in the passwords, try to fill the form and submit. You'll see that the form will ask you to define a password with at least 8 characters, with letters and numbers. And you need to confirm (repeat) it once more.</p>
                </div>

            </div>
        </section>
    );
}