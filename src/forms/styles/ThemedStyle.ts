import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    // * FORM Label
    .mb-form-label
    {
        font-size: 14px;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
    }

    // * FORM Error
    .mb-form-error
    {
        font-size: 12px;
        color: ${props => props.theme.colors.error};
        padding: 2px 0 0 0;
    }

    // * FROM Hint
    .mb-form-hint
    {
        font-size: 12px;
        color: ${props => props.theme.colors.light};
        min-width: 100%;
        height: auto;
        padding: 1px 0 0 0;

        &.onfocus
        {
            overflow: hidden;
            opacity: 0;
            max-height: 0px;
            transition: opacity 0.5s ease, max-height 0.5s ease;
        }
    }
    .mb-form-field.focus { .mb-form-hint.onfocus { opacity: 1; max-height: 150px; } }



    // * FORM Field
    .mb-form-field
    {
        color-scheme: ${props => props.theme.scheme};

        display: flex;
        flex-direction: column;

        margin-bottom: 20px;
        &.mb-checkbox, &.mb-radio { margin-bottom: 10px; }

        // Field Controler Box
        .controller-box
        {
            display: flex;
            flex-direction: row;
            justify-content: stretch;
            align-items: stretch;

            .box-prefix, .box-suffix {
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.white};
                padding: 5px;
                min-width: 40px;
                cursor: default;
            }
            .box-prefix { border-top-left-radius: ${props => props.theme.form.field.idle.border_radius}; border-bottom-left-radius: ${props => props.theme.form.field.idle.border_radius}; }
            .box-suffix { border-top-right-radius: ${props => props.theme.form.field.idle.border_radius}; border-bottom-right-radius: ${props => props.theme.form.field.idle.border_radius}; }

            .box-field { display: flex; align-items: stretch; justify-content: stretch; flex: 1; position: relative; }
        }
        &.disabled .controller-box { opacity: 0.6; cursor: default; }


        input, select, textarea
        {
            border: 1px solid ${props => props.theme.form.field.idle.border};
            background: ${props => props.theme.form.field.idle.background};
            box-shadow: inset 1px 1px 3px ${props => props.theme.form.field.idle.shadow};
            border-radius: ${props => props.theme.form.field.idle.border_radius};

            color: ${props => props.theme.colors.darker};

            font-family: inherit;
            font-size: 14px;
            line-height: 14px;

            min-height: 40px;
            width: 100%;
            padding: 0 12px;

            &:focus
            {
                outline: 2px solid ${props => props.theme.colors.primary}20;
                background: ${props => props.theme.form.field.focus.background};
            }

            &::placeholder { color: ${props => props.theme.colors.darker}50; }
            &:-ms-input-placeholder { color: ${props => props.theme.colors.darker}50; }
            &::-ms-input-placeholder { color: ${props => props.theme.colors.darker}50; }
        }
        .with-prefix { input, select, textarea { border-top-left-radius: 0; border-bottom-left-radius: 0; } }
        .with-suffix { input, select, textarea { border-top-right-radius: 0; border-bottom-right-radius: 0; } }

        textarea
        {
            min-height: 120px;
            resize: vertical;
            padding: 10px 12px;
        }

        select, textarea
        {
            &::-webkit-scrollbar { width: 8px; }
            &::-webkit-scrollbar-track { background: ${props => props.theme.colors.primary}20; border-top-right-radius: ${props => props.theme.form.field.idle.border_radius}; }
            &::-webkit-scrollbar-thumb { background: ${props => props.theme.colors.primary}50; border-radius: ${props => props.theme.form.field.idle.border_radius}; }
            &::-webkit-scrollbar-thumb:hover { background: ${props => props.theme.colors.primary}; }
        }



        .field-password-showhide
        {
            position: absolute;
            height: 24px;
            top: calc(50% - 12px);
            right: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;

            color: ${props => props.theme.colors.darker}90;
        }

        .field-password-strength
        {
            position: absolute;
            bottom: -2px;
            left: calc(${props => props.theme.form.field.idle.border_radius});
            right: calc(${props => props.theme.form.field.idle.border_radius});
            height: 3px;
        
            .bar { transition: 0.5s ease-in-out; width: 0; height: 100%; }

            .label { position: absolute; right: 0px; top: 3px; text-transform: uppercase; font-size: 11px; }

            &.strength-1 { .bar { width: 20%; background: #b22; } .label { color: #b22; } }
            &.strength-2 { .bar { width: 40%; background: #b52; } .label { color: #b52; } }
            &.strength-3 { .bar { width: 60%; background: #b92; } .label { color: #b92; } }
            &.strength-4 { .bar { width: 80%; background: #AA2; } .label { color: #AA2; } }
            &.strength-5 { .bar { width: 100%; background: #2B2; } .label { color: #2B2; } }
        }



        &.mb-checkbox
        {
            label
            {
                display: flex;
                align-items: center;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                input { opacity: 0; height: 0; width: 0; min-height: 0; }

                .check {
                    height: 24px;
                    width: 24px;

                    border: 1px solid ${props => props.theme.form.field.idle.border};
                    background: ${props => props.theme.form.field.idle.background};
                    box-shadow: inset 1px 1px 3px ${props => props.theme.form.field.idle.shadow};

                    transition: background-color 0.4s ease;

                    border-radius: 4px;
                    margin-right: 10px;
                }

                /* Create the checkmark/indicator (hidden when not checked) */
                .check:after
                {
                    content: "";
                    position: absolute;
                    display: block;
                    opacity: 0;

                    left: 8px;
                    top: 4px;
                    width: 5px;
                    height: 10px;
                    border: solid ${props => props.theme.colors.white};
                    border-width: 0 2px 2px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                /* On mouse-over, add a grey background color */
                &:hover input ~ .check,
                &:focus .check {
                    outline: 2px solid ${props => props.theme.colors.primary}20;
                    background: ${props => props.theme.form.field.focus.background};
                }

                /* When the checkbox is checked, add a blue background */
                input:checked ~ .check { background-color: ${props => props.theme.colors.primary}; }
                input:checked ~ .check:after { opacity: 1; }
            }

            &.focus .check {
                outline: 2px solid ${props => props.theme.colors.primary}20;
                background: ${props => props.theme.form.field.focus.background};
            }
        }
        


        // * RADIO BUTTON
        &.mb-radio
        {
            label
            {
                display: flex;
                align-items: center;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                input { opacity: 0; height: 0; width: 0; min-height: 0; }

                .check
                {
                    height: 24px;
                    width: 24px;

                    border: 1px solid ${props => props.theme.form.field.idle.border};
                    background: ${props => props.theme.form.field.idle.background};
                    box-shadow: inset 1px 1px 3px ${props => props.theme.form.field.idle.shadow};

                    transition: background-color 0.4s ease;

                    border-radius: 50%;
                    margin-right: 10px;
                }

                /* Create the checkmark/indicator (hidden when not checked) */
                .check:after
                {
                    content: "";
                    position: absolute;
                    display: block;
                    opacity: 0;

                    left: 8px;
                    top: 8px;
                    width: 8px;
                    height: 8px;
                    background-color: ${props => props.theme.colors.white};
                    border-radius: 50%;
                }

                /* On mouse-over, add a grey background color */
                &:hover input ~ .check,
                &:focus .check {
                    outline: 2px solid ${props => props.theme.colors.primary}20;
                    background: ${props => props.theme.form.field.focus.background};
                }

                /* When the checkbox is checked, add a blue background */
                input:checked ~ .check { background-color: ${props => props.theme.colors.primary}; }
                input:checked ~ .check:after { opacity: 1; }
            }

            &.focus .check {
                outline: 2px solid ${props => props.theme.colors.primary}20;
                background: ${props => props.theme.form.field.focus.background};
            }
        }



        &.error
        {
            .box-prefix, .box-suffix { background-color: ${props => props.theme.colors.error}; }

            input, select, textarea
            {
                border-color: ${props => props.theme.colors.error};
                &:focus { outline: 2px solid ${props => props.theme.colors.error}20; }
            }
        }
    }
`;