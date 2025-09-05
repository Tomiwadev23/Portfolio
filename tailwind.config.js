/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
theme: {
  screens:{
      'tiny': {'max': '319.98px'},
  'xs': {'min': '320px', 'max': '575.98px'},
  'sm': {'min': '576px', 'max': '767.98px'},
  'md': {'min': '768px', 'max': '991.98px'},
  'lg': {'min': '992px', 'max': '1199.98px'},
  'xl': {'min': '1200px', 'max': '1399.98px'},
  '2xl': {'min': '1400px'},

  },
  extend: {
    colors: {
      primary: '#1DA1F2',
      crazy: '#FF5733',
      foolish: '#C70039',
    },
    fontSize: {
      'lg': '2.125rem',
    },
      fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
 
    
    }
    
  
},
plugins: [],
}
/*
Note: The code above contains a syntax error. 
The `colors` object should be inside `theme`, and `extend` should be at the same level as `colors`, not inside it.

There is no reference to `angular:style/global:style` in this file. 
If you are looking for Angular's global styles, check the `styles.css` or `styles.scss` file in your Angular project's `src` folder.
*/