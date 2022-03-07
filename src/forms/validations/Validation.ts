import { ValidationRule, Validate } from "react-hook-form";


export function vRequired (message?: string): ValidationRule<boolean>
{
    return { value: true, message: message || "This field is required" };
}


export function vMin (min: number, message?: string): ValidationRule<number>
{
    return { value: min, message: message || `The min value is ${min}` };
}

export function vMax (max: number, message?: string): ValidationRule<number>
{
    return { value: max, message: message || `The max value is ${max}` };
}

export function vBetween (min: number, max: number, message?: string): Validate<string>
{
    return (value: string) => ((parseFloat(value) >= min) && (parseFloat(value) <= max)) || `Value should be between ${min} and ${max}`;
}


export function vMinLength (min: number, message?: string): ValidationRule<number>
{
    return { value: min, message: message || `Use at least ${min} characters` };
}

export function vMaxLength (max: number, message?: string): ValidationRule<number>
{
    return { value: max, message: message || `Use no more than ${max} characters` };
}


export function vMinDate (min: string, message?: string): Validate<string>
{
    return (value: string) => (value >= min) || `Inform a date starting at ${min}`;
}

export function vMaxDate (max: string, message?: string): Validate<string>
{
    return (value: string) => (value <= max) || `Inform a date ending at ${max}`;
}

export function vBetweenDate (min: string, max: string, message?: string): Validate<string>
{
    return (value: string) => ((value >= min) && (value <= max)) || `Inform a date between ${min} and ${max}`;
}


export function vMinTime (min: string, message?: string): Validate<string>
{
    return (value: string) => (value >= min) || `Inform a time starting at ${min}`;
}

export function vMaxTime (max: string, message?: string): Validate<string>
{
    return (value: string) => (value <= max) || `Inform a time ending at ${max}`;
}

export function vBetweenTime (min: string, max: string, message?: string): Validate<string>
{
    return (value: string) => ((value >= min) && (value <= max)) || `Inform a time between ${min} and ${max}`;
}


export function vMinDateTime (min: string, message?: string): Validate<string>
{
    return (value: string) => (value >= min) || `Inform a date & time starting at ${min}`;
}

export function vMaxDateTime (max: string, message?: string): Validate<string>
{
    return (value: string) => (value <= max) || `Inform a date & time ending at ${max}`;
}

export function vBetweenDateTime (min: string, max: string, message?: string): Validate<string>
{
    return (value: string) => ((value >= min) && (value <= max)) || `Inform a date & time between ${min} and ${max}`;
}


// * For Checkboxes
export function vMinChecks (min: number, message?: string): Validate<string>
{
    return (value: string) => (value?.length >= min) || `Check at least ${min} options`;
}



type vPasswordRules =
{
    min?: number,
    max?: number,

    letters?: boolean,
    numbers?: boolean,
    special?: boolean,
    lowercase?: boolean,
    uppercase?: boolean,

    strong?: boolean
}

export function vPassword (rules: vPasswordRules): Validate<string>
{
    return (value: string) =>
    {
        // Capture the password and remove spaces around it
        const password = value.trim();


        // * BETWEEN Length
        if (rules.min && rules.max && (password.length < rules.min || password.length > rules.max)) return `Use a password between ${rules.min} and ${rules.max} chars`;

        // * MIN Length
        if (rules.min && password.length < rules.min) return `Use at least ${rules.min} chars`;

        // * MAX Length
        if (rules.max && password.length > rules.max) return `Use no more than ${rules.max} chars`;

        // * LETTERS
        if ((rules.strong || rules.letters) && !password.match(/[a-z]|[A-Z]+/)) return `Use at least one letter`;

        // * NUMBERS
        if ((rules.strong || rules.numbers) && !password.match(/[0-9]+/)) return `Use at least one number`;

        // * SPECIAL
        if ((rules.strong || rules.special) && !password.match(/[$@#&!]+/)) return `Use at least one special char ( $ @ # & ! )`;

        // * LOWERCASE
        if ((rules.strong || rules.lowercase) && !password.match(/[a-z]+/)) return `Use at least one lowercase letter`;

        // * UPPERCASE
        if ((rules.strong || rules.uppercase) && !password.match(/[A-Z]+/)) return `Use at least one uppercase letter`;
    }
}

export function vPasswordConfirm (password: string): Validate<string>
{
    return (value: string) =>
    {
        // Check if the values are different
        if (value.trim() !== password.trim()) return "Passwords are different!";
    }
}