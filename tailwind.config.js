/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
      theme: {
            extend: {
                  backgroundImage: {
                        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  },
                  colors: {
                        background: "#101010",
                        background_2: "#171717",
                        text: "#a4a4a4",
                        accent: "#1c1c1c",
                        accent_1: "#363636",
                        yellow: "#ffd744",
                        blue: "#0AABEA",
                        green: "#20EA53",
                  },
            },
      },
      plugins: [],
};
