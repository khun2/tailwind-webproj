const { default: daisyui } = require('daisyui');

module.exports = {
    content: [
      './**/*.html',
    ],
    theme: {
      extend: {
        dropShadow: {
          glow: [
            "0 0px 10px var(--tw-shadow-color)",
            "0 0px 20px var(--tw-shadow-color)",
          ]
        },
        fontFamily: {
          jetbrains: ["JetBrains Mono", "mono"]
        },
        gradientColorStopPositions: {
          // Végtelen felhő az aljánhoz :D
          98: '99%',
          99: '99.9%',
        }
      },
    },
      plugins: [
        require('daisyui'),
    ],
    daisyui: {
      darkTheme: 'forest',
      themes: ['forest', 'valentine', 'retro', 'cyberpunk']
    },
  }