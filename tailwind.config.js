/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        primary: {
          900: "#091b2e",
          800: "#0a2136",
          700: "#0b263f",
          600: "#0c2b48",
          500: "#0d253f",
          400: "#213e59",
          300: "#365672",
          200: "#4b6e8c",
          100: "#6087a6"
        },
        secondary: {
          900: "#016b8c",
          800: "#0185a8",
          700: "#0190b8",
          600: "#019ac9",
          500: "#01b4e4",
          400: "#33c2ea",
          300: "#66d0ef",
          200: "#99def4",
          100: "#ccebf9"
        },
        tertiary: {
          900: "#4a7958",
          800: "#5f8d6c",
          700: "#74a280",
          600: "#89b794",
          500: "#90cea1",
          400: "#a8d6b4",
          300: "#c0dec7",
          200: "#d8e6da",
          100: "#f0eee9"
        },
        danger: {
          900: "#7f1d1d",
          800: "#991b1b",
          700: "#b91c1c",
          600: "#dc2626",
          500: "#ef4444",
          400: "#f87171",
          300: "#fca5a5",
          200: "#fecaca",
          100: "#fee2e2"
        }
      }
    }
  },
  plugins: []
};

// Netflix

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         transparent: "transparent",
//         white: "#ffffff",
//         primary: {
//           900: "#000000", // Black background
//           800: "#0f0f0f",
//           700: "#141414", // Netflix main dark background
//           600: "#1f1f1f",
//           500: "#262626",
//           400: "#333333",
//           300: "#404040",
//           200: "#525252",
//           100: "#737373"
//         },
//         secondary: {
//           900: "#7f1d1d", // Deep red for hover
//           800: "#991b1b",
//           700: "#b91c1c",
//           600: "#dc2626",
//           500: "#e50914", // Netflix Red
//           400: "#ef4444",
//           300: "#f87171",
//           200: "#fca5a5",
//           100: "#fee2e2"
//         },
//         tertiary: {
//           900: "#171717", // Grayish dark
//           800: "#2e2e2e",
//           700: "#3f3f3f",
//           600: "#525252",
//           500: "#737373", // Subtitle gray
//           400: "#a3a3a3",
//           300: "#d4d4d4",
//           200: "#e5e5e5",
//           100: "#f5f5f5"
//         },
//         danger: {
//           900: "#7f1d1d",
//           800: "#991b1b",
//           700: "#b91c1c",
//           600: "#dc2626",
//           500: "#ef4444",
//           400: "#f87171",
//           300: "#fca5a5",
//           200: "#fecaca",
//           100: "#fee2e2"
//         }
//       }
//     }
//   },
//   plugins: []
// };
