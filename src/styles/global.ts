import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-yellow: #f4e427;
    --color-dark-gray: #282a36;
    --color-gray: #666666;
    --color-light-gray: #e3e3e3;
    --color-red: #c0392b;
    --color-green: #83ba43;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-dark-gray);
    }

    body,input, textarea, button {
        font-family: 'Lato';
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    input.form-control,input.form-control, input.form-control:focus {
        background-color: var(--color-black);
        color: var(--color-white);

    }

    label {
        font-size: 0.7rem;
    }

    .cursor-pointer { cursor: pointer; }
`;
