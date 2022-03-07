import React, { ReactNode, useState, InputHTMLAttributes, ChangeEvent, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldProps, FormField } from "../Core";



// * INPUT
// - Common input field, for text, number, date, time...
interface InputProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef((props: InputProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-input">

            <input {...props} ref={ref}/>

        </FormField>
    );
});


// * INPUT NUMBER
interface InputNumberProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const InputNumber = React.forwardRef((props: InputNumberProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-input">

            <input type="number" {...props} ref={ref}/>

        </FormField>
    );
});


// * INPUT DATE
interface InputDateProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const InputDate = React.forwardRef((props: InputDateProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-input">

            <input type="date" {...props} ref={ref}/>

        </FormField>
    );
});


// * INPUT TIME
interface InputTimeProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const InputTime = React.forwardRef((props: InputTimeProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-input">

            <input type="time" {...props} ref={ref}/>

        </FormField>
    );
});


// * INPUT DATETIME
interface InputDateTimeProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const InputDateTime = React.forwardRef((props: InputDateTimeProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-input">

            <input type="datetime-local" {...props} ref={ref}/>

        </FormField>
    );
});


// * INPUT PASSWORD
interface InputPasswordProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> { showToggle?: boolean; showStrength?: boolean; buttonShow?: string | ReactNode; buttonHide?: string | ReactNode; }
export const InputPassword = React.forwardRef((props: InputPasswordProps, ref: any) =>
{
    // The "password show" status
    const [ showPassword, setShowPassword ] = useState(false);

    // The password strength
    const [ strength, setStrength ] = useState(0);

    // Extract specific props, and remove them from the "rest"
    const { showToggle, showStrength, ...rest } = props;


    // * STRENGTH Check
    // - Check the password and define it's strength
    function checkStrength (event: ChangeEvent<HTMLInputElement>)
    {
        // Get the current password value
        const password = event.target.value.trim();

        // Start the local strength variable
        let newStrength = 0;

        // Keep the strength as "very weak" if password length is less than 5
        if (password.length > 0 && password.length < 5)
        {
            newStrength = 1;
        }
        else
        {
            // * MIN Length
            if (password.length >= 8) newStrength++;

            // * NUMBERS
            if (password.match(/[0-9]+/)) newStrength++;

            // * SPECIAL
            if (password.match(/[$@#&!]+/)) newStrength++;

            // * LOWERCASE
            if (password.match(/[a-z]+/)) newStrength++;

            // * UPPERCASE
            if (password.match(/[A-Z]+/)) newStrength++;
        }

        // Uptade the strength (in state) only if it has really changed
        if (newStrength != strength) setStrength(newStrength);


        // Also execute the "onChange" of hook form
        if (props.onChange !== undefined) props.onChange(event);
    }

    // * STRENGTH Label
    // - Define and return the strength lable
    function displayStrength (): string
    {
        if (strength === 1) return "Very Weak";
        else if (strength === 2) return "Weak";
        else if (strength === 3) return "Medium";
        else if (strength === 4) return "Strong";
        else if (strength === 5) return "Very Strong";
        else return "";
    }


    return (
        <FormField props={rest} class="mb-input">

            <input type={showPassword ? "text" : "password"} {...rest} ref={ref} onChange={checkStrength}/>
            
            {
                // Password Toggle Icon
                (showToggle || showToggle === undefined) &&
                (
                    <div className="field-password-showhide" onClick={() => {setShowPassword(!showPassword)}}>
                        {
                            showPassword
                            ? (props.buttonHide !== undefined ? props.buttonHide : "HIDE")
                            : (props.buttonShow !== undefined ? props.buttonShow : "SHOW")
                        }
                    </div>
                )
            }

            {
                // Password Strength
                (showStrength) &&
                (
                    <div className={`field-password-strength strength-${strength}`}>
                        <div className="bar"></div>
                        <div className="label">{ displayStrength() }</div>
                    </div>
                )
            }

        </FormField>
    );
});


// * SELECT
// - Common select field
interface SelectProps extends FieldProps, SelectHTMLAttributes<HTMLSelectElement> {}
export const Select = React.forwardRef((props: SelectProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-select">

            <select {...props} ref={ref}>
                {props.children}
            </select>

        </FormField>
    );
});


// * TEXT AREA
// - Common textarea field
interface TextAreaProps extends FieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const TextArea = React.forwardRef((props: TextAreaProps, ref: any) =>
{
    return (
        <FormField props={props} class="mb-textarea">

            <textarea {...props} ref={ref} />

        </FormField>
    );
});


// * CHECKBOX
interface CheckboxProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const Checkbox = React.forwardRef((props: CheckboxProps, ref: any) =>
{
    // Extract specific props, and remove them from the "rest"
    const { label, ...rest } = props;

    return (
        <FormField props={rest} class="mb-checkbox">

            <label>
                <input type="checkbox" {...rest} ref={ref} />
                <span className="check"></span>
                <span>{label}</span>
            </label>

        </FormField>
    );
});


// * RADIO BUTTON
interface RadioButtonProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {}
export const RadioButton = React.forwardRef((props: RadioButtonProps, ref: any) =>
{
    // Extract specific props, and remove them from the "rest"
    const { label, ...rest } = props;

    return (
        <FormField props={rest} class="mb-radio">

            <label>
                <input type="radio" {...rest} ref={ref} />
                <span className="check"></span>
                <span>{label}</span>
            </label>

        </FormField>
    );
});