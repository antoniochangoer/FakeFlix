import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                "main": "Outfit, sans-serif"
            },
            color: {
                "brand-red": "#FC4747",
                "brand-dark-blue": "#10141E",
                "brand-grey-blue": "#5A698F",
                "brand-semi-blue": "#161D2F",
            },
            fontSize: {
                "body-m": "15px",
                "body-s": "13px",
            },
        },
    },

    plugins: [forms],
};
