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

//Todo configure when date is reached
// https://codepen.io/AllThingsSmitty/pen/JJavZN

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy,
    dayMonth = '08/12/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      // modified lines to print 2 digits with 0 appended at the start
      document.getElementById('days').innerText = String(
        Math.floor(distance / day)
      ).padStart(2, '0');
      document.getElementById('hours').innerText = String(
        Math.floor((distance % day) / hour)
      ).padStart(2, '0');
      document.getElementById('minutes').innerText = String(
        Math.floor((distance % hour) / minute)
      ).padStart(2, '0');
      document.getElementById('seconds').innerText = String(
        Math.floor((distance % minute) / second)
      ).padStart(2, '0');

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById('headline').innerText = "It's my birthday!";
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

//typeit animation

//status_code_0 animation
// new TypeIt('#element', {
//   lifeLike: false,
//   speed: 0,
// })
//   .type('s')
//   .pause(135)
//   .type('t')
//   .pause(141)
//   .type('a')
//   .pause(138)
//   .type('t')
//   .pause(102)
//   .type('y')
//   .pause(84)
//   .type('s')
//   .pause(300)
//   .delete(1)
//   .pause(187)
//   .delete(1)
//   .pause(357)
//   .type('u')
//   .pause(69)
//   .type('s')
//   .pause(243)
//   .type('_')
//   .pause(298)
//   .type('c')
//   .pause(133)
//   .type('o')
//   .pause(10)
//   .type('o')
//   .pause(287)
//   .type('d')
//   .pause(186)
//   .type('e')
//   .pause(295)
//   .move(-2)
//   .pause(140)
//   .delete(1)
//   .pause(130)
//   .move(null, { to: 'END' })
//   .pause(192)
//   .delete(1)
//   .pause(329)
//   .type('e')
//   .pause(501)
//   .type('_')
//   .pause(956)
//   .type('0')
//   .go();

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
    .type(
      './<span class="text-white">FAQ</span>'
    )
    .go();
//   new TypeIt('#heading-teams', {
//   speed: 125,
//   waitUntilVisible: true,
// })
//   .type('<span class="text-white">TEAM</span>')
//   .pause(162)
//   .type('dpkg')
//   .pause(154)
//   .move(-4)
//   .type(' ')
//   .move(4)
//   .type(' ')
//   .type('-i')
//   .pause(139)
//   .pause(284)
//   .move(3, { instant: true })
//   .go();

new TypeIt('#heading-Community-Partner', {
  speed: 75,
  waitUntilVisible: true,
})
  .type('./<span class="text-white">COMMUNITY PARTNERS</span>')
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
