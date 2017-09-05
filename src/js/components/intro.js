import 'objectFitPolyfill';
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

function intro() {

// ScrollMagic controller for all animation sequences
const controller = new ScrollMagic.Controller();

//Image sequence functionality
const images = [
  "img/birch1.jpg",
  "img/birch2.jpg",
  "img/birch3.jpg",
  "img/birch4.jpg",
  "img/birch5.jpg",
  "img/birch6.jpg",
  "img/birch7.jpg",
  "img/birch8.jpg",
  "img/birch9.jpg",
  "img/birch10.jpg",
  "img/birch11.jpg",
  "img/birch12.jpg",
  "img/birch13.jpg",
  "img/birch14.jpg"
];

const obj = {curImg: 0};

const tween = TweenLite.to(obj, 0.5,
  {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
      document.getElementById("intro__image").src=images[obj.curImg];
    }
  }
);

const imagesScene = new ScrollMagic.Scene({triggerElement: ".intro__trigger", duration: "300%"})
.setTween(tween)
.addTo(controller);

//Pin the Intro Media Section after image sequence is completed
new ScrollMagic.Scene({triggerElement: ".intro__end"})
.setClassToggle(".intro__media", "active")
.addTo(controller);


// Fading in elements once they are in the viewport
const fadeInElements = document.getElementsByClassName('fade');
for (var i=0; i<fadeInElements.length; i++) {
  const fadeInScene = new ScrollMagic.Scene({triggerElement: fadeInElements[i], reverse: false, triggerHook: 1})
  .setClassToggle(fadeInElements[i], 'fade--active')
  .addTo(controller);
}


}


export default intro;
