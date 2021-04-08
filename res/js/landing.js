// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

window.addEventListener(
  "scroll",
  (scrollFunction = () => {
    if ($(window).width() >= 1024) {
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? smallBrandImg()
        : largeBrandImg();
    }
  })
);

const smallBrandImg = () => {
  document.getElementById("navbar-brand").style.padding = "8px";
  document.getElementById("navbar-brand").style.width = "136px";
  document.getElementById("navbar-brand").style.height = "80px";
  document.getElementById("navbar-brand").style.transitionDuration = ".5s";
  document.getElementById("navbar-brand-img").style.width = "104px";
  document.getElementById("navbar-brand-img").style.transitionDuration = ".5s";
};
const largeBrandImg = () => {
  document.getElementById("navbar-brand").style.padding = "16px";
  document.getElementById("navbar-brand").style.width = "288px";
  document.getElementById("navbar-brand").style.height = "138px";
  document.getElementById("navbar-brand-img").style.width = "208px";
};
