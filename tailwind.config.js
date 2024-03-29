const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "400": "400px",
      },
      maxWidth: {
        "83": "83.333333%",
        "1.2rem": "1.2rem",
      },
      maxHeight: {
        "14px": "14px",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        skinColor: "#f6efe8",
        purple: {
          deep: "#611f69",
          more_deep: "#4a154b",
        },
        blue: {
          lightning: "#4285f4",
          middle: "#1264a3",
          deep: "#1264a3",
        },
        gray: {
          light: "#454545",
        }
      },
      boxShadow: {
        slight: "0 0 0 1px #611f69",
        thick: "0 0 0 2px #611f69",
        slight_white: "0 0 0 1px #fff",
        thick_white: "0 0 0 2px #fff",
        loginForm: "0 1px 4px rgb(0 0 0 / 30%)",
        loginFocus: "0 0 0 1px #1264a3, 0 0 0 5px rgba(29,155,209,.3)",
      },
      transitionProperty: {
        box: 'box-shadow, color, background',
        border: 'border, box-shadow'
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)",
        
      },
      transitionDuration: {
        "80": "80ms, 80ms",
      },
      gridTemplateColumns: {
        "35-60": "35% 60%",
        "65-30": "65% 30%",
      },
      spacing: {
        "5%": "5%",
        "5vh": "5vh",
      },
      clipPath: {
        "elip": "ellipse(75% 100% at center top)"
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
          border: "solid black",
          borderWidth: "0 2px 2px 0",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
};
