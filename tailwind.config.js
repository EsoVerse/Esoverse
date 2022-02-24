module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://blogger.googleusercontent.com/img/a/AVvXsEg9ZT4-BZDg41-P0MX88uqgbnmyZvdPH_KlL3l5kUHIoIR-L69V3fOIcFG8HX3XMygmRbc8W430c2xpzZZU4FzAO1xo4HJE5P2NY6dgi4Yc55r0MGJHRhjRkPWS9xEfX3t2JCJkrtDvuIcsx0KKLav6Z8s5BwxVQ9KOhXfud7FGqHasliReV8WJ9BC5=s1440')",
        booyah: "url('https://blogger.googleusercontent.com/img/a/AVvXsEiEJquhv1GSnSk-tKgHzYK44bRSMy4488GshA4Hr0z28GoPRCZqIfj3mgzJRFzXIimzLzFF1ogmr8lh_XN293ZZNM6rOtxC0KaBP6Up-1XyfJ6YgdLaLubm3OOi5fCWTyblmjkWWupwfSE3vcA_6kqsJwU8_5iv9B76ZW915aywU5IIj7wodN6Vl4rb=s1440')",
        giraffe: "url('https://blogger.googleusercontent.com/img/a/AVvXsEh4DCyIila458woWcXlWWvB1jCtXsKmGU15m5gy2QxJ7cwqJnmdHSfucBCTUqg8vA364EKjd0kWNtlAuHD3QqH1c_T03XpJnHJajzMQop-552JHv3xeDkyPBSphrK2YENUihApwF7WT3LxRgPqZ-TEBzFRYIgesgx6NVjcHaI9_9lISoeUyPtBi0Emu=s1440')"
       },
       fontFamily: {
        quicksand: ['"Quicksand"'],
        lato: ["Lato"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
