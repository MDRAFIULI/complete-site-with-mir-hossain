module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
        
"primary": "#176F6B",
        
"secondary": "#FFC000",
        
"accent": "#FFEDD5",
        
"neutral": "#F3F4F6",
        
"base-100": "#FFFFFF",
        
"info": "#98A8DD",
        
"success": "#1BBB70",
        
"warning": "#FBBD23",
        
"error": "#FA5C5C",
        },
      },
      {
        dark: {
        
"primary": "#D9F99D",
        
"secondary": "#FDE68A",
        
"accent": "#4B5563",
        
"neutral": "#F3F4F6",
        
"base-100": "#1F2937",
        
"info": "#98A8DD",
        
"success": "#1BBB70",
        
"warning": "#F59E0B",
        
"error": "#FB7185",
        },
      },
//       {
//         dark: {
        
// "primary": "#F3F4F6",
        
// "secondary": "#FFC000",
        
// "accent": "#FFEDD5",
        
// "neutral": "#F3F4F6",
        
// "base-100": "#FFFFFF",
        
// "info": "#98A8DD",
        
// "success": "#1BBB70",
        
// "warning": "#FBBD23",
        
// "error": "#FA5C5C",
//         },
//       },
    ],
  },
  plugins: [require("daisyui")],
}