import { useState } from "react";
import { useForm } from "react-hook-form";

// * REACT FORMS : Fields
// - Load available fields from "react forms"
import { Input, InputDate, InputNumber, Checkbox, RadioButton, Select, TextArea, InputPassword } from '../../forms/fields/Basic';
import { FormError } from '../../forms/Core';
import { vPassword, vPasswordConfirm, vRequired, vMinChecks } from "../../forms/validations/Validation";


export function DemoSandbox ()
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
        console.table(data);
    }


    return (
        <section>
            <div className="head">
                <div>
                    <h2>Sandbox</h2>
                    <p>Test environment for new fields</p>
                </div>

                <div>
                    { visible && <a onClick={() => { setCode(!code); }}><i className={`fa fa-code ${code ? "visible" : "hidden"}`}></i></a> }
                    <a onClick={() => { setVisible(!visible); }}><i className={`fa ${visible ? "fa-angle-up" : "fa-angle-down"}`}></i></a>
                </div>
            </div>

            <div className={`body ${visible ? "visible" : ""}`}>

                <div className={`form ${code ? "" : "visible"}`}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input label="Text field, with a label" {...register("text", { required: vRequired() })} error={errors.text} withprefix=":)"/>
                        <InputNumber placeholder="Number field, with a placeholder" disabled withprefix=":D"/>
                        <InputDate defaultValue="2022-01-01" label="Date field" {...register("date")} hint="With a hint text below it"/>

                        <InputPassword label="Password" placeholder="Use a good one :)" showStrength={true} {...register("password")}/>

                        <Select label="Select one option" {...register("select", { required: vRequired() })}>
                            <option></option>

                            <optgroup label="Group 1">
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3" disabled>Option 03</option>
                            </optgroup>

                            <optgroup label="Group 2">
                                <option value="4">Option 04</option>
                                <option value="5">Option 05</option>
                            </optgroup>

                            <optgroup label="Group 1">
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3" disabled>Option 03</option>
                            </optgroup>

                            <optgroup label="Group 2">
                                <option value="4">Option 04</option>
                                <option value="5">Option 05</option>
                            </optgroup>

                            <optgroup label="Group 1">
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3" disabled>Option 03</option>
                            </optgroup>

                            <optgroup label="Group 2">
                                <option value="4">Option 04</option>
                                <option value="5">Option 05</option>
                            </optgroup>

                            <optgroup label="Group 1">
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3" disabled>Option 03</option>
                            </optgroup>

                            <optgroup label="Group 2">
                                <option value="4">Option 04</option>
                                <option value="5">Option 05</option>
                            </optgroup>
                        </Select>

                        <TextArea label="Notes" placeholder="Share yout notes here" {...register("textarea")}/>

                        <h3>Some checkboxes</h3>
                        <Checkbox label="Check 01" value="check_1" {...register("check", { validate: { minchecks: vMinChecks(2) } })}/>
                        <Checkbox label="Check 02" value="check_2" {...register("check", { validate: { minchecks: vMinChecks(2) } })}/>
                        <Checkbox label="Check 03" value="check_3" {...register("check", { validate: { minchecks: vMinChecks(2) } })}/>
                        <FormError error={errors.check}/>

                        <h3>Some radio buttons</h3>
                        <RadioButton label="Radio 01" value="value_01" {...register("radio")} error={errors.radio}/>
                        <RadioButton label="Radio 02" value="value_02" {...register("radio")} error={errors.radio}/>
                        <RadioButton label="Radio 03" value="value_03" {...register("radio")} error={errors.radio}/>

                        <button type="submit">Sign Up</button>

                    </form>
                </div>

                <code className={`form-code ${code ? "visible" : ""}`}>{``}
                </code>

                <div className="description">...</div>

            </div>
        </section>
    );
}