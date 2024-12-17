let sppinerBody = document.querySelector('.sppinerBody')
window.addEventListener('load', function a() {
  sppinerBody.style.display = 'none'
})
// animation header start

gsap.from('.heaer', {
  duration: 1,
  delay: 1.1,
  ease: 'power1.easeInOut',
  y: '-100%',
})
gsap.from('.logo', {
  delay: 1.5,
  duration: 1,
  ease: 'power1.easeInOut',
  scale: '1',
  stagger: 0.2,
})
gsap.from(
  '.menu .link',
  {
    delay: 0.4,
    duration: 0.5,
    ease: 'power1.easeInOut',
    y: '-100%',
    stagger: 0.2,
  },
  '-=.4'
)
// animation header end
// animation product card start
gsap.to('.over_color', {
  duration: 1,
  ease: 'power1.easeOut',
  y: '100%',
})

gsap.to(
  '.man .over_color',
  {
    duration: 1,
    ease: 'power1.easeOut',
    y: '100%',
  },
  '-=.7'
)

gsap.from(' img', {
  duration: 1,
  ease: 'power1.easeInOut',
  scale: '1.5',
  stagger: 0.2,
})
gsap.from('.card_title', {
  duration: 1,
  ease: 'power1.easeInOut',
  y: 50,
})
gsap.from('.card_name', {
  duration: 1,
  ease: 'power1.easeInOut',
  y: 30,
})
gsap.from('.card', {
  duration: 1,
  ease: 'power1.easeInOut',
  y: '80px',
})

// animation product card start
/* animation skill start */

gsap.from('.ber abbr', {
  scrollTrigger: '.skill ',
  duration: 3,
  ease: 'power1.easeInOut',
  // ease: 'bounce.inOut',
  left: 0,

  markers: true,
  stagger: 0.2,
  scrub: 1,
})
gsap.from('.ber span', {
  scrollTrigger: '.skill ',
  duration: 3,

  markers: true,
  ease: 'power1.easeInOut',
  // ease: 'bounce.inOut',
  width: 0,
  stagger: 0.2,
  scrub: 2,
  pin: true,
})

/* animation skill end */
/* animation name start */
gsap.to('#myName h1', {
  transform: 'translateX(-90%)',
  scrollTrigger: {
    trigger: '#myName h1',
    scroller: 'body',
    markers: true,
    start: 'top -20%',
    end: 'top -150%',
    scrub: 2,
    pin: true,
  },
})

/* animation name end */

/* animation image zoom start */
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.zoomImage',
      start: 'top top',
      end: '+=150%',
      pin: true,
      scrub: true,
      markers: true,
    },
  })
  .to('img', {
    scale: 5,
    z: 350,
    transformOrigin: 'center center',
    ease: 'power1.inOut',
  })
  .to('.zoomImage', {
    scale: 1.1,
    transformOrigin: 'center center',
    ease: 'power1.inOut',
  })

/* animation  image zoom end */
/*  start */
gsap.to('.right-text h1', {
  transform: 'translateX(-90%)',
  scrollTrigger: {
    trigger: '.right-text h1',
    scroller: 'body',
    markers: true,
    start: 'top 33%',
    end: 'top -100%',
    scrub: 2,
  },
})
gsap.to('.left h1', {
  transform: 'translateX(90%)',
  scrollTrigger: {
    trigger: '.left h1',
    scroller: 'body',
    markers: true,
    start: 'top 70%',
    end: 'top -270%',
    scrub: 2,
  },
})

gsap.to('#about-me ', {
  transform: 'translateY(90%)',
  scrollTrigger: {
    trigger: '#about-me',
    scroller: 'body',
    markers: true,
    start: 'top 70%',
    end: 'top -10%',
    scrub: 2,
  },
})
/* animation  video end */
