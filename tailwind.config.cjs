module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        
      },
      gridTemplateRows: {
         'footer': '50px minmax(900px, 1fr) 100px',

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
};
