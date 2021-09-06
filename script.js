'use strict';

///////////////////////////////////////
const h1element = document.querySelector('h1');
// const alertdis = function () {
//   alert('the boss has enter');
//   h1element.removeEventListener('mouseenter', alertdis);
// };
// h1element.addEventListener('mouseenter', alertdis);

// Modal window
const section = document.querySelector('#section--1');
const h1 = document.querySelector('h1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const message = document.createElement('div');
const section2 = document.querySelector('#section--2');
////cokkie part
// message.classList.add('cookie-message');
// message.innerHTML =
//   'we have used cookies for better experience.<button class="btn btn-close-cookie">Got it </button>';
// header.append(message);
// header.prepend(message.cloneNode(true));
// header.before(message);
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     document.querySelector('.cookie-message').remove();
//   });

message.style.backgroundColor = '#37383d';
message.style.width = '100vw';
message.style.margin = '0px';
message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('', 'orangered');
const img1 = document.querySelector('.nav__logo');
img1.setAttribute('data-versionnumber', 3.0);

const btnscrollto = document.querySelector('.btn--scroll-to');
// btnscrollto.addEventListener('click', function () {
//   const section1val = document.querySelector('#section--1');
//   const sectioncord = section1val.getBoundingClientRect();
//   // window.scrollTo({
//   //   left: sectioncord.left + window.pageXOffset,
//   //   top: sectioncord.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   section1val.scrollIntoView({ behavoiue: 'smooth' });
// });

//////////////////
const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal.forEach(val => val.addEventListener('click', openModal));
// btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////
const randomnumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
const randomcolor = () => `rgb(
  ${randomnumber(0, 256)},${randomnumber(0, 256)},${randomnumber(0, 256)}
)`;

// const btnelement = document.querySelector('.nav__link');
// btnelement.addEventListener('click', function () {
//   this.style.backgroundColor = randomcolor();
// });
// const btnparentele = document.querySelector('.nav__links');
// btnparentele.addEventListener('click', function () {
//   this.style.backgroundColor = randomcolor();
// });
// const btnparent2 = document.querySelector('.nav');
// btnparent2.addEventListener('click', function () {
//   this.style.backgroundColor = randomcolor();
// });
//////////////////////Scrolling////
// document.querySelectorAll('.nav__link').forEach((value, i, arr) => {
//   value.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(e.target.getAttribute('href'));
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target.getAttribute('href'));
    const maal = e.target.getAttribute('href');
    document.querySelector(maal).scrollIntoView({ behavior: 'smooth' });
  }
});
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function () {
    document
      .querySelector('#section--1')
      .scrollIntoView({ behavior: 'smooth' });
  });
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
/////////////////////////////////////////////////////Tab menu///
const buttonclick = document.querySelectorAll('.operations__tab');
const tabcontainer = document.querySelector('.operations__tab-container');
const content = document.querySelector('.operations__content');
tabcontainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) {
    return;
  }
  if (clicked) {
    console.log(clicked);
    buttonclick.forEach(val => val.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');
    console.log(clicked.dataset.tab);
    document
      .querySelectorAll('.operations__content')
      .forEach(val => val.classList.remove('operations__content--active'));
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});
////////////////////////Menu fade animation/////
const nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const img = e.target.closest('.nav').querySelector('img');
//     const sibling = e.target.closest('.nav').querySelectorAll('.nav__link');
//     sibling.forEach(val => (val.style.opacity = '0.5'));

//     link.style.opacity = '1.0';

//     img.style.opacity = '0.5';
//   }
// });
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const img = e.target.closest('.nav').querySelector('img');
//     const sibling = e.target.closest('.nav').querySelectorAll('.nav__link');
//     sibling.forEach(val => (val.style.opacity = '1'));

//     link.style.opacity = '1';

//     img.style.opacity = '1';
//   }
// });
/////update fade ///

const handoverelement = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const img = e.target.closest('.nav').querySelector('img');
    const sibling = e.target.closest('.nav').querySelectorAll('.nav__link');

    sibling.forEach(val => {
      if (val !== link) val.style.opacity = this;
    });

    img.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handoverelement.bind(0.5));
// nav.addEventListener('mouseover', handoverelement.bind(0.5));
nav.addEventListener('mouseout', handoverelement.bind(1.0));
// ////////stick nav///
// const secord = section.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > secord.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
///////////////////////////////
function callbackfun(entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  }
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  }
}
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
};
const observer = new IntersectionObserver(callbackfun, options);
observer.observe(header);
//////fading slide

const SEction = document.querySelectorAll('.section');
const options1 = { root: null, threshold: 0.15 };
const callback1 = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer1.unobserve(entry.target);
  }
};
const observer1 = new IntersectionObserver(callback1, options1);
SEction.forEach(function (val) {
  observer1.observe(val);
  val.classList.add('section--hidden');
});
//////blur image////
const callimg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // console.log(entries);
  // console.log(entry);
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    imgobserver.unobserve(entry.target);
  });
};
const imgobserver = new IntersectionObserver(callimg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

const altimg = document.querySelectorAll('img[data-src]');
altimg.forEach(function (val) {
  imgobserver.observe(val);
});
////////slider menu///////////
// const slide = document.querySelectorAll('.slide');
// const maxslides = slide.length;
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.2) translateX(-1200px)';
// let curval = 0;
// slide.forEach(function (val, i) {
//   val.style.transform = `translateX(${100 * i}%`;
// });
// slider.style.overflow = 'visible';
// const btnright = document.querySelector('.slider__btn--right');
// btnright.addEventListener('click', function () {
//   if (curval === maxslides - 1) {
//     curval = 0;
//   } else {
//     curval++;
//   }
//   slide.forEach(
//     (val, i) => (val.style.transform = `translateX(${100 * (i - curval)}%)`)
//   );
// });
const slide = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dots1 = document.querySelector('.dots');
/////////
const gototshift = function (slide1) {
  slide.forEach(
    (val, i) => (val.style.transform = `translateX(${100 * (i - slide1)}%)`)
  );
};
const btnslide = function () {
  slide.forEach((val, i) => {
    dots1.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></buttob>`
    );
  });
};
const rightshift = function () {
  if (calval === maxslide - 1) {
    calval = 0;
  } else {
    calval++;
  }
  gototshift(calval);
  activedot(calval);
};
const leftshift = function () {
  if (calval === 0) {
    calval = maxslide - 1;
  } else {
    calval--;
  }
  gototshift(calval);
  activedot(calval);
};
gototshift(0);
btnslide();
// slider.style.transform = 'scale(0.2) translateX(-1200px)';
// slider.style.overflow = 'visible';
let calval = 0;
const maxslide = slide.length;
// slide.forEach((val, i) => (val.style.transform = `translateX(${100 * i}%`));
const rightbtn = document.querySelector('.slider__btn--right');
rightbtn.addEventListener('click', rightshift);
const leftbtn = document.querySelector('.slider__btn--left');
leftbtn.addEventListener('click', leftshift);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    rightshift();
  }
  if (e.key === 'ArrowLeft') {
    leftshift();
  }
});
dots1.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slidebtn = e.target.dataset.slide;
    console.log('dot');
    gototshift(slidebtn);
    activedot(slidebtn);
  }
});
const activedot = function (dotval) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(val => val.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${dotval}"]`)
    .classList.add('dots__dot--active');
};
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('html parse dom concent built', e);
});
window.addEventListener('load', function (e) {
  console.log('page fully loaded', e);
});
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);

//   e.returnValue = '';
// });
