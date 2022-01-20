const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Jost: "'Jost', sans-serif",
      },
      colors: {
        primary: '#F28130',
        secondary: '#FEC432',
        light: '#FFF8E5',
        bg: '#F6F6F6',
        alert: '#FF0000CC',
        sucess: '#00C14DCC',
        dark: '#121127',
        icon: '#9D9CAF'
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
