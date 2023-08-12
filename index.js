//blinking animation
const blinkingAnimation = () => {
  new TypeIt('#blinking', {
    lifeLike: false,
    speed: 0,
  })
    .type('.')
    .pause(435)
    .type('.')
    .pause(441)
    .type('.')
    .pause(438)
    .go();
};
//preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  blinkingAnimation();
  loader.style.display = 'none';
});

// https://codepen.io/AllThingsSmitty/pen/JJavZN
//heading animations
new TypeIt('#heading-schedule', {
  speed: 125,
  waitUntilVisible: true,
})
  .type('cat <span class="text-white">SCHEDULE</span>.txt')
  .go();

new TypeIt('#heading-tracks', {
  speed: 125,
  waitUntilVisible: true,
})
  .type('ls ')
  .pause(162)
  .type('-a ')
  .pause(154)
  .type('<span class="text-white">TRACKS</span>')
  .pause(217)
  .type('txt')
  .pause(139)
  .move(-3)
  .type('.')
  .pause(284)
  .move(3, { instant: true })
  .go();

new TypeIt('#heading-prizes', {
  speed: 150,
  waitUntilVisible: true,
})
  .type('vi <span class="text-white">PRIZE</span>.yml')
  .go();

new TypeIt('#heading-sponsors', {
  speed: 125,
  waitUntilVisible: true,
})
  .type('tar -xvzf<span class="text-white"> SPONSORS</span>.t')
  .pause(468)
  .type('ar.gz', { instant: true })
  .go();

new TypeIt('#heading-rules', {
  speed: 125,
  waitUntilVisible: true,
})
  .type('./<span class="text-white">FAQ</span>')
  .go();

//devfolio

// create a script element
const script = document.createElement('script');
script.src = 'https://apply.devfolio.co/v2/sdk.js';
script.async = true;
script.defer = true;

// add the script to the body of the document
document.body.appendChild(script);

// remove the script from the body of the document on unmount
window.addEventListener('beforeunload', () => {
  document.body.removeChild(script);
});

// change devolio button size
// let button = document.querySelector(".devfolio-button-iframe");
// button.style = "padding: 0px; border: 0px; margin: 0px; height: 44px; width: 312px;"
