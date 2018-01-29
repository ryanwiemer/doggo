# [Doggo For Hire](https://www.doggoforhire.com/)
A digital resume for an awesome dog named Birch.

![screenshot](screenshot.jpg "screenshot")

## Awards
* ["Most Loved" on One Page Love](https://onepagelove.com/doggo-for-hire) 🎉
* ["Liked" by Stefan on Design Made In Germany](http://www.designmadeingermany.de/sites-we-like/stefan/) 🎉

## Development
* `npm i` to install dependencies
* `npm run build` to create a development ready build located in the `build` folder
* `npm run start` to start a development server and watch for changes within the `build` folder
* `npm run deploy` to create a production ready build located in the `dist` folder

## File Structure
```
├── src
│   ├── index.html              # Static HTML file
│   ├── img/                    # Contains all images used on the website
│   ├── js/                     # Contains all Javascript/Component files to be compiled
│   │    └──scripts.js          # Javascript entry point (ES6 compatible via Babel)
│   └── scss/                   # Contains all styling to be compiled
│        └──style.scss          # Sass entry point
|
└── build                       # Generated build folder created via npm run build
└── dist                        # Generated dist folder created via npm run deploy
```

## Tools & Frameworks Used
* [Netlify](https://www.netlify.com/)
* [Webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [ScrollMagic](http://scrollmagic.io/)
* [GSAP](https://greensock.com/gsap)
