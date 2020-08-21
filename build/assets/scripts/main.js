window.onresize = function (event) {
  location.href = location.href;
};

if (document.documentElement.clientWidth < 1024) {
  document.querySelector('.desctop').remove();
}
if (document.documentElement.clientWidth < 768) {
  document.querySelector('.tablet').remove();
}

document.querySelector('.man').classList.add('first-animation');
document.querySelector('.preloader').classList.add('first-animation');
document.querySelector('video').play();

let lettersPreloader = document.querySelectorAll('.svg-title path'),
  interval = 152;

setTimeout(() => {
  lettersPreloader.forEach(item => {
    interval += 152;
    setInterval(function () {
      item.style.fill = "#ffffff";
    }, interval);
  });
}, 1200);

setTimeout(() => {
  document.querySelector('.preloader').classList.add('second-animation');
}, 4100);

if (document.documentElement.clientWidth >= 1024) {
  setTimeout(() => {
    document.querySelector('.bg').classList.add('first-animation');
    document.querySelector('.man').classList.add('second-animation');
  }, 5000);
  setTimeout(() => {
    document.querySelector('.svg-date').classList.add('first-animation');
    document.querySelector('.svg-online').classList.add('first-animation');
    document.querySelector('.bot-btns').classList.add('first-animation');
  }, 6200);
} else {
  setTimeout(() => {
    document.querySelector('.bg').classList.add('first-animation');
    document.querySelector('.man').classList.add('second-animation');
  }, 4000);
  setTimeout(() => {
    document.querySelector('.svg-date').classList.add('first-animation');
    document.querySelector('.svg-online').classList.add('first-animation');
    document.querySelector('.bot-btns').classList.add('first-animation');
  }, 5200);
}

document.querySelector('.bot-btns__info').addEventListener('click', function (event) {
  document.querySelector('.svg-title').classList.add('first-animation');
  document.querySelector('.bot-btns__info').classList.add('first-animation');
  document.querySelector('.bot-popup').classList.add('first-animation');

});
document.querySelector('.bot-popup-label').addEventListener('click', function (event) {
  document.querySelector('.svg-title').classList.remove('first-animation');
  document.querySelector('.bot-btns__info').classList.remove('first-animation');
  document.querySelector('.bot-popup').classList.remove('first-animation');
});