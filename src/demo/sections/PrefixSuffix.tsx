import { useState } from "react";
import { useForm } from "react-hook-form";

// * REACT FORMS : Fields
// - Load available fields from "react forms"
import { Input } from '../../forms/fields/Basic';


function ClipboardCopy (value: string)
{
    function copy ()
    {
        // Copy the value to the clipboard
        navigator.clipboard.writeText(value || "");

        // Show an alert
        alert(`Cool! You just copied "${value || ""}" to the clipboard.`);
    }

    return (
        <div onClick={copy}>
            <i className="fa fa-copy"></i>
        </div>
    );
}

export function DemoPrefixSuffix ()
{
    // Section "visibility" and "show code" status
    const [ visible, setVisible ] = useState(true);
    const [ code, setCode ] = useState(false);

    // * FORM Configuration
    // - Configures the form of this section
    const { register, watch } = useForm ();


    return (
        <section>
            <div className="head">
                <div>
                    <h2>Prefix &amp; Suffix</h2>
                    <p>Easily add prefixes and suffixes around your fields</p>
                </div>

                <div>
                    { visible && <a onClick={() => { setCode(!code); }}><i className={`fa fa-code ${code ? "visible" : "hidden"}`}></i></a> }

                    <a onClick={() => { setVisible(!visible); }}><i className={`fa ${visible ? "fa-angle-up" : "fa-angle-down"}`}></i></a>
                </div>
            </div>

            <div className={`body ${visible ? "visible" : ""}`}>

                <div className={`form ${code ? "" : "visible"}`}>
                    <form>
                        <Input label="A lonely field.... :(" {...register("field1")}/>
                        
                        <Input label="A field, with a prefix" {...register("field2")} withprefix={<i className="fa fa-key"></i>}/>
                        <Input label="A field, with a suffix" {...register("field3")} withsuffix="A larger suffix"/>

                        <Input label="A field, with both a prefix and suffix" {...register("field4")} withprefix={<i className="fa fa-at"></i>} withsuffix={ClipboardCopy(watch("field4"))}/>
                    </form>
                </div>

                <code className={`form-code ${code ? "visible" : ""}`}>
                    <pre>
                    {`
<form>
    <Input label="A lonely field.... :(" {...register("field1")}/>
    
    <Input label="A field, with a prefix" {...register("field2")} withprefix={<i className="fa fa-key"></i>}/>
    <Input label="A field, with a suffix" {...register("field3")} withsuffix="A larger suffix"/>

    <Input label="A field, with both a prefix and suffix" {...register("field4")} withprefix={<i className="fa fa-at"></i>} withsuffix={ClipboardCopy(watch("field4"))}/>
</form>
                    `}
                    </pre>
                </code>

                <div className="description">
                    <p>
                        A <b>Prefix</b> goes in the left side of the field.<br/>
                        A <b>Suffix</b> goes in the right side of the field.
                    </p>

                    <p>And both can be a simple <b>string</b>, or an entire <b>React Node</b> with behaviours of itself.</p>
                </div>

            </div>
        </section>
    );
}