function showMessage() {
  var win = window.open("./child.html", "_blank", "width=400,height=200");

  var typingMessage =
    "Hello, this is a demo for typing message. <br> few seconds and this window will terminate...";

  var i = 0;
  var interval1 = setInterval(() => {
    if (i === typingMessage.length - 1) {
      clearInterval(interval1);
      setTimeout(() => {
        win.close();
      }, 2000);
    }
    win.document.write(typingMessage[i]);
    i++;
  }, 400);
}
