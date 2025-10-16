/** @type {import('tailwindcss').Config} */
export default {
    content:  ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    500: "#6366f1",
                    400: "#818cf8"
                },
                accent: {
                    500: "#22d3ee",
                    400: "#67e8f9"
                }
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
            }
        }
    },
    darkMode: "class",
    plugins: []
}