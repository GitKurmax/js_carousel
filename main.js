let leftArrrow = document.querySelector('.left');
let rightArrrow = document.querySelector('.right');
let elemToScroll = document.querySelector('.scroll');
let x = 0;
let left;

leftArrrow.onclick = scroll(event, elemToScroll);
rightArrrow.onclick = scroll(event, elemToScroll);

function scroll(event, elem) {
  return function (event) {
    if (event.target.classList.contains('left')){
      left = x - 390;
      if (left < -910) {
        left = -910;
      }
      elem.style.left = left + "px";
      x = left;
    } else {
      left = x + 390;
      if (left >= 0) {
        left = 0;
      }
      elem.style.left = left + "px";
      x = left;
    }
  }
}  