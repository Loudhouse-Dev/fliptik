/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
