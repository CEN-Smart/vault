/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        secondary: '0px 15px 35px rgba(0 0 0/.2)',
        tertiary: '0px 10px 25px rgba(0, 0, 0, 0.07)',
      },
      backgroundImage: {
        primary:
          'radial-gradient(circle farthest-corner at center center, #158E7F 0%, #000000 100%, #158E7F 61%, #000000 100%)',
        button: 'linear-gradient(89deg, #158E7F 38.58%, #43D680 106.84%)',
        secondary:
          'radial-gradient(circle farthest-side at center center, #158E7F 0%, #000000 100%, #158E7F 100%, #000000 0%)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
        card: 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
