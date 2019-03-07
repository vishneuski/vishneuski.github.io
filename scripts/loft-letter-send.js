var letterIcon = document.getElementById("letter-icon");

letterIcon.onclick = function () {

  var message = document.getElementById("send-message");


  if (message.style.display !== 'none') {
      message.style.display = 'none';
  } else {
      message.style.display = 'block';
  }
};
