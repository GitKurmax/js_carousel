const elemToScroll = document.querySelector('.scroll');
const imgContainer = document.querySelector('.img_wrapper');
const imgAmount = imgContainer.querySelectorAll('.img');
const imgWidth = imgContainer.querySelector('img').offsetWidth;
let x = 0;
let left;

document.querySelector('.wrapper').addEventListener('click', scroll(elemToScroll));

function scroll(elem) {
  return function (event) {
    if (event.target.classList.contains('left')){
      left = x - imgContainer.offsetWidth;
      if (left < -910) {
        left = -910;
      }
      elem.style.left = left + "px";
      x = left;
    } else if (event.target.classList.contains('right')) {
      left = x + imgContainer.offsetWidth;
      if (left >= 0) {
        left = 0;
      }
      elem.style.left = left + "px";
      x = left;
    }
  }
}  