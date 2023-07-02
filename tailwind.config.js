/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
            primary: "Firs"
        },
        backgroundColor: {
            'primary': '#f8f4f2',
            'primaryBtn': '#d2beb1',
            'secondaryBtn': '#ebe1db',
            'secondary': '#dccbc1',
        },
        colors: {
            'primary': '#060504',
            'secondary': '#dccbc1'
        },
        fontSize: {
            'title': '32px',
            'paragraph': '25px',
            'default': '18px',
            'small': '15px',
        },
        screens: {
            'desktop': '1700px',
            // 'notebook': '1200px',
            'tablet': '1100px',
            'mobile': '992px',
        },
        backgroundImage: {
            'hero-pattern': "url('./assets/images/hotelOne.jpeg')",
        }
    },
  },
  plugins: [],
}