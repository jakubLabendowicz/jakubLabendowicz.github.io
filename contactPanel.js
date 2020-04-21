function contactPanel() {
  var contactPanelBg = document.querySelector('#contactPanelBg');
  var contactPanel = document.querySelector('#contactPanel');

  console.log(contactPanelBg);

  if(contactPanelBg.style.visibility == "hidden") {
    contactPanelBg.style.visibility = "visible";
    contactPanelBg.style.animation = "openContactPanelBgAnimation 4s 1";
    setTimeout(function() {
      contactPanel.style.visibility = "visible";
    }, 4000);
  }
  else {
    contactPanel.style.visibility = "hidden";
    contactPanelBg.style.animation = "closeContactPanelBgAnimation 4s 1";
    setTimeout(function() {
      contactPanelBg.style.visibility = "hidden"
    }, 4000);
  }
}
