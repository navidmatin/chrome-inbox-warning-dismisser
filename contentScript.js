window.onload = function() {
  var tryToDismissInterval = setInterval(TryToDismiss, 1 * 1000);
  setTimeout(function() {clearInterval(tryToDismissInterval)}, 10 * 1000);
};

function TryToDismiss(){
  var dom = document.getElementsByClassName("AK eX B6");
  if(dom.length > 0)
  {
    dom[0].click();
  }
}
