///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector(`.nav`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });
  section1.scrollIntoView({ behavior: `smooth` });
});

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  if (!clicked) return;
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);

  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

//MENU FADE ANIMATION
const handleHover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing a "argument" into handler
nav.addEventListener(`mouseover`, handleHover.bind(0.5));

nav.addEventListener(`mouseout`, handleHover.bind(1));

//STICKY NAV

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener(`scroll`, function () {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// });

//sticky nav intersection observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0,0.2,],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(`.header`);
const navHeight = nav.getBoundingClientRect().height;

const stickynav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
};

const headerObserver = new IntersectionObserver(stickynav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll(`.section`);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove(`section--hidden`);

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add(`section--hidden`);
});
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////
//////////////  PRACTICING ///////////////////////////////////////////
// const header = document.querySelector(`.header`);
// const allSections = document.querySelectorAll(`.section`); //node list
// console.log(allSections);
// document.getElementById(`section--1 `);
// const allButtons = document.getElementsByTagName(`button`); // live list of tags
// console.log(allButtons);
// console.log(document.getElementsByClassName(`btn`)); //also live list
// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// // message.textContent=`we use cookies for improved functionality and analytics.`;
// message.innerHTML = `we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;
// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// //Attributes

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = `Beautiful minimalist logo`;

// //NON standart

// console.log(logo.designer);
// console.log(logo.getAttribute(`designer`));

// console.log(logo.setAttribute(`company`, `Bankist`));

// console.log(logo.getAttribute(`src`));

// const link = document.querySelector(`.twitter-link`);

// console.log(link.href);
// console.log(link.getAttribute(`href`));
// console.log(logo.dataset.versionNumber);

// const h1 = document.querySelector(`h1`);
// const alertH1 = function (e) {
//   alert(`header!!!!`);
//   // h1.removeEventListener(`mouseenter`, alertH1);
// };
// h1.addEventListener(`mouseenter`, alertH1);
// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopImmediatePropagation();
// });
// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector(`h1`);

// console.log(h1.querySelectorAll(`.higj;ight`));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `orange`;

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
