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
        sucess: '#00C14DCC'
      },
    },
  },
  plugins: [],
};
