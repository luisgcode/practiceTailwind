module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundImage: {
        imageOne: "url('../img/img-1.jpg')",
        imageTwo: "url('../img/img-2.jpg')",
        imageThree: "url('../img/img-3.jpg')",
        imageFour: "url('../img/img-4.jpg')",
        imageFive: "url('../img/img-5.jpg')",
        imageSix: "url('../img/img-6.jpg')",
        imageSeven: "url('../img/img-7.jpg')",
        imageEight: "url('../img/img-8.jpg')",
        imageNine: "url('../img/img-9.jpg')",
        imageTen: "url('../img/img-10.jpg')",
        imageEleven: "url('../img/img-11.jpg')",
        imageTwelve: "url('../img/img-12.jpg')",
        imageThirteen: "url('../img/img-13.jpg')",
        imageFourteen: "url('../img/img-14.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4a",
        secondary: "#8fa206",
        tertiary: "#61aec9",
      }),
      textColor: {
        primary: "#CC2D4a",
        secondary: "#8fa206",
        tertiary: "#61aec9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
