import { ReactNode, useState } from "react";
import { FieldError } from "react-hook-form";


interface FormFieldProps
{
    class?: string;

    props: FieldProps;

    children: ReactNode;
}

export interface FieldProps
{
    label?: string;

    hint?: string | ReactNode;
    hintfocus?: boolean;
    
    withprefix?: string | ReactNode;
    withsuffix?: string | ReactNode;

    error?: FieldError | undefined;

    disabled?: boolean;
}



// * Form Label
// - Defines a container to display field labels
export function FormLabel (props: { label: string })
{
    // Get the field error (if any)
    const { label } = props;

    // Build and return the container
    return (
        <div className="mb-form-label">
            {label}
        </div>
    );
}


// * Form Error
// - Defines a container to display field errors
export function FormError (props: { error?: FieldError | undefined })
{
    // Get the field error (if any)
    const { error } = props;

    // Build and return the container
    return (
        <>
            {
                error &&
                (
                    <div className="mb-form-error">
                        {error.message}
                    </div>
                )
            }
        </>
    );
}


// * Form Hint
// - Defines a container to display field hints
export function FormHint (props: { hint: string | ReactNode, hintfocus?: boolean })
{
    // Get the field error (if any)
    const { hint, hintfocus } = props;

    // Build and return the container
    return (<div className={`mb-form-hint ${hintfocus ? "onfocus" : ""}`}>{hint}</div>);
}


// * FIELD Container
// - Defines a common container to wrap the fields
export function FormField (field: FormFieldProps)
{
    // Get the field error (if any)
    const { label, error, hint, hintfocus, withprefix, withsuffix, disabled } = field.props;

    // The "focus" status
    const [ focus, setFocus ] = useState(false);


    // Build and return the container
    return (
        <div className={`mb-form-field ${error ? "error" : ""} ${disabled ? "disabled" : ""} ${focus ? "focus" : ""} ${field.class ? field.class : ""}`} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
            { label && <FormLabel label={label}/> }

            <div className={`controller-box ${withprefix ? "with-prefix" : ""} ${withsuffix ? "with-suffix" : ""}`}>
                { withprefix && <div className="box-prefix">{withprefix}</div> }

                <div className="box-field">{field.children}</div>

                { withsuffix && <div className="box-suffix">{withsuffix}</div> }
            </div>

            { error && <FormError error={error}/> }

            { hint && <FormHint hint={hint} hintfocus={hintfocus}/> }
        </div>
    );
}