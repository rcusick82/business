// shrink header on scroll down 50px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-nav").style.fontSize = "15px";
  } else {
    document.getElementById("header-nav").style.fontSize = "20px";
  }
}
