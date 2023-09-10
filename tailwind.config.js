module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    //adds font
    fontFamily: {
      'sans': ["Noto Sans", 'sans-serif'],
      extend: {

        scrollBehavior: ['smooth'],  // adding custom property
  },
  plugins: [],
}
}
}