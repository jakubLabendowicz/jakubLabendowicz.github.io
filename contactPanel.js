function contactPanel() {
  var contactPanelBg = document.querySelector('#contactPanelBg');
  var contactPanel = document.querySelector('#contactPanel');

  console.log(contactPanelBg);

  if(contactPanelBg.style.visibility == "hidden") {
    contactPanelBg.style.visibility = "visible";
    contactPanelBg.style.animation = "openContactPanelBgAnimation 3s 1";
    setTimeout(function() {
      contactPanel.style.visibility = "visible";
    }, 3000);
  }
  else {
    contactPanel.style.visibility = "hidden";
    contactPanelBg.style.animation = "closeContactPanelBgAnimation 3s 1";
    setTimeout(function() {
      contactPanelBg.style.visibility = "hidden"
    }, 3000);
  }
}
