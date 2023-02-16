let currentScroll = 0;
const bounds = 0.01;

let fakeScroll = document.createElement('div');
let container = document.querySelector('.scroll-container');

let dashboard = document.querySelector('.download-page');
let titleScreen = document.querySelector('.title-screen');

let body = document.body;
let html = document.documentElement;

let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

fakeScroll.className = 'fake-scroll';
fakeScroll.style.height = (height + 0.1) + 'px';
document.body.appendChild(fakeScroll);

const updateFakeScroll = function () {
  body = document.body;
  html = document.documentElement;
  height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  fakeScroll.style.height = (height + 0.1) + 'px';
}

const updateScroll = function () {
  let diff = currentScroll - window.scrollY;
  currentScroll = window.scrollY;

  if (currentScroll > bounds) {
    dashboard.classList.add("shown")
    titleScreen.classList.remove("shown")
  } else {
    dashboard.classList.remove("shown")
    titleScreen.classList.add("shown")
  }
}

document.addEventListener("scroll", updateScroll);
window.addEventListener("resize", updateFakeScroll);
