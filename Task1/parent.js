var win = window.open("./child.html", "_blank", "width=10%,height=15%");

var isMovingDown = true;
var step = 25;

function moveWindow() {
  if (isMovingDown) {
    win.moveBy(step, step);

    if (win.screenY)
      if (window.screen.availHeight - (win.outerHeight + win.screenX) <= 0) {
        isMovingDown = false;
      }
  } else {
    win.moveBy(-step, -step);

    if (win.screenX - step <= 0) {
      isMovingDown = true;
    }
  }
}

var interval = setInterval(() => {
  moveWindow();
}, 200);

function stopMoving() {
  clearInterval(interval);
  win.focus();
}
