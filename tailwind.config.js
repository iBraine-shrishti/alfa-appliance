module.exports = {
  theme: {
    extend: {
      keyframes: {
        'slow-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slow-scroll': 'slow-scroll 60s linear infinite',
      },
    },
  },
};