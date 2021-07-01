!(function (d) {
  var itemClassName = 'slide_container';
  let items = d.getElementsByClassName(itemClassName);
  let totalItems = items.length;
  let slide = 0;
  let type = d.getElementsByClassName('carousel_container')[0].classList.contains('fade')
    ? 'fade'
    : d.getElementsByClassName('carousel_container')[0].classList.contains('slide')
    ? 'slide'
    : null;
  console.log(type);

  function setInitialClasses() {
    const currentSlide = d.getElementsByClassName('slide_container')[slide];
    const prevSlide = d.getElementsByClassName('slide_container')[totalItems - 1];
    const nextSlide = d.getElementsByClassName('slide_container')[slide + 1];

    if (type == 'fade') {
      currentSlide.style.opacity = 1;
      prevSlide.style.opacity = 0;
      nextSlide.style.opacity = 0;
    } else if (type == 'slide') {
      currentSlide.style.left = 0;
      currentSlide.style.zIndex = 1;
      prevSlide.style.left = '-100%';
      nextSlide.style.left = '100%';
      prevSlide.style.zIndex = '-1';
      nextSlide.style.zIndex = '-1';
    }
  }

  function setEventListeners() {
    const next = d.getElementsByClassName('carousel_button-arrow_right')[0];
    const prev = d.getElementsByClassName('carousel_button-arrow_left')[0];
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
  }

  function changeSlide(slide) {
    next = slide + 1;
    prev = slide - 1;
    if (next === totalItems) {
      next = 0;
    }
    if (prev === -1) {
      prev = totalItems - 1;
    }
    console.log(slide, next, prev);
    const getClass = d.getElementsByClassName('slide_container');
    if (type == 'fade') {
      getClass[slide].style.opacity = 1;
      getClass[next].style.opacity = 0;
      getClass[prev].style.opacity = 0;
    } else if (type == 'slide') {
      getClass[slide].style.zIndex = '2';
      getClass[next].style.left = '100%';
      getClass[prev].style.left = '-100%';
      getClass[slide].style.left = 0;
      getClass[next].style.zIndex = '-1';
      getClass[prev].style.zIndex = '-1';
    }
  }

  function nextSlide() {
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    changeSlide(slide);
  }
  function prevSlide() {
    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    changeSlide(slide);
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
  }

  initCarousel();
})(document);
