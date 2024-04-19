// const selector = {
//   paragraph: Splitting({
//     target: ".hero_paragraph_text",
//     by: "words",
//   }),

//   image: document.querySelector(".hero_background"),
//   navItems: document.querySelectorAll(".nav_item"),
// };
// const initLenis = () => {
//   const lenis = new Lenis({
//     lerp: 0.05,
//     smoothWheel: true,
//   });
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => lenis.raf(time * 1000));
//   gsap.ticker.lagSmoothing(0);

//   initScroll();
// };

// const initScroll =()=>{

// }

// window.addEventListener("DOMContentLoaded", initLenis);


// Ensure Splitting library is included before using it
// Ensure Lenis and ScrollTrigger libraries are included before using them

const selector = {
    // Make sure Splitting library is loaded before using it
    paragraph: Splitting({
      target: ".hero_paragraph_text",
      by: "words",
    }),
  
    // Select the .hero_background element
    image: document.querySelector(".hero_background"),
    // Select all elements with class .nav_item
    navItems: document.querySelectorAll(".nav_item"),
  };
  
  const initLenis = () => {
    // Initialize Lenis with options
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });
  
    // Update ScrollTrigger when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);
    // Add Lenis's requestAnimationFrame to GSAP's ticker
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    // Set lag smoothing to 0 for GSAP's ticker
    gsap.ticker.lagSmoothing(0);
  
    // If you need to initialize additional functionality when Lenis is initialized, add it here
    initScroll();
  };

  const initScroll = ()=>{

  }
  
  // Initialize Lenis when DOM content is fully loaded
  window.addEventListener("DOMContentLoaded", initLenis);
//   const heroBackground = document.querySelector(".hero_background");
// const windowHeight = window.innerHeight;

// const showBackground = () => {
//   gsap.to(heroBackground, {
//     opacity: 1,
//     duration: 1, // Adjust the duration as needed
//     ease: "power2.inOut" // Adjust the ease as needed
//   });
// };

// const hideBackground = () => {
//   gsap.to(heroBackground, {
//     opacity: 0,
//     duration: 1, // Adjust the duration as needed
//     ease: "power2.inOut" // Adjust the ease as needed
//   });
// };

// let lastScrollPosition = 0;

// const handleScroll = () => {
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition && currentScrollPosition > windowHeight) {
//     // Scrolling down
//     hideBackground();
//   } else {
//     // Scrolling up
//     showBackground();
//   }

//   lastScrollPosition = currentScrollPosition;
// };

// window.addEventListener("scroll", handleScroll);

// const heroBackground = document.querySelector(".hero_background");
// const windowHeight = window.innerHeight;

// const showBackground = () => {
//   gsap.to(heroBackground, {
//     opacity: 1,
//     duration: 1, // Faster transition
//     ease: "none" // No easing
//   });
// };

// const hideBackground = () => {
//   gsap.to(heroBackground, {
//     opacity: 0,
//     duration: 1, // Faster transition
//     ease: "none" // No easing
//   });
// };

// let lastScrollPosition = window.scrollY;

// const handleScroll = () => {
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition && currentScrollPosition > windowHeight) {
//     // Scrolling down
//     hideBackground();
//   } else {
//     // Scrolling up
//     showBackground();
//   }

//   lastScrollPosition = currentScrollPosition;
// };

// window.addEventListener("scroll", handleScroll);


// const heroBackground = document.querySelector(".hero_background");
// const windowHeight = window.innerHeight;
// const scrollDuration = 1; // Duration of the scroll animation in seconds

// const handleScroll = () => {
//   const scrollPosition = window.scrollY;
//   const maxScroll = document.body.scrollHeight - windowHeight;
//   const scrollPercentage = scrollPosition / maxScroll;

//   // Calculate the opacity based on scroll percentage
//   const opacity = scrollPercentage > 0.5 ? 1 : scrollPercentage * 2;

//   // Update the opacity of the hero background gradually
//   gsap.to(heroBackground, {
//     opacity: opacity,
//     duration: scrollDuration,
//     ease: "none" // No easing
//   });
// };

// window.addEventListener("scroll", handleScroll);


const heroBackground = document.querySelector(".hero_background");
const windowHeight = window.innerHeight;
const scrollDuration = 1; // Duration of the scroll animation in seconds

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - windowHeight;
  const scrollPercentage = scrollPosition / maxScroll;

  // Calculate the opacity based on scroll percentage
  const opacity = scrollPercentage <= 0.5 ? 1 : (1 - scrollPercentage) * 2;

  // Update the opacity of the hero background gradually
  gsap.to(heroBackground, {
    opacity: opacity,
    duration: scrollDuration,
    ease: "none" // No easing
  });
};

window.addEventListener("scroll", handleScroll);
