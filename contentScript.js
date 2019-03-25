function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
  var foundTheButton = false
  while (!foundTheButton)
  {
    
    var buttonArray = document.getElementsByClassName("AK eX B6")
    if (buttonArray.length > 0)
    {
      foundTheButton = true
      buttonArray[0].click();
    }
    else
    {
      await sleep(500);
    }
  }
}
