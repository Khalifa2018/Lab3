function showAdvertising() {
  var win = window.open("./child.html", "_blank", "width=500,height=500");

  var stepCount = 0;
  var interval = setInterval(() => {
    win.scrollBy(0, 100);
    stepCount += 100;
    if (stepCount >= win.document.body.scrollHeight) {
      clearInterval(interval);

      setTimeout(() => {
        win.close();
      }, 2000);
    }
  }, 500);
}
