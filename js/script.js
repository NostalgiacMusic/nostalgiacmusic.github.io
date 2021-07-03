window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector("body");
  const limit = 15;
  let initialPosH = null
  let initialPosY = null

  window.addEventListener('deviceorientation', evt => {
    let horizontal = Math.round(event.alpha);
    let vertical = 75 - Math.round(event.beta)

    horizontal = horizontal / -2;
    vertical = vertical / -2;

    if (Math.abs(horizontal) > limit) {
      if (horizontal > limit) {
        horizontal = limit;
      } else {
        horizontal = -limit;
      }
    }

    if (Math.abs(vertical) > limit) {
      if (vertical > limit) {
        vertical = limit;
      } else {
        vertical = -limit;
      }
    }

    let style = `${50 + horizontal}% ${50 + vertical}%`;
    main.style.backgroundPosition = style;
  })
})
