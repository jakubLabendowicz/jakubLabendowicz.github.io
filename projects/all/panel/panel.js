function panelOpener(panelName) {
  var panelVisibility = document.getElementById(panelName).style.visibility;
  if(panelVisibility == "hidden") {
    document.getElementById('mainPanel').style.visibility = "hidden";
    document.getElementById('panelsPanel').style.visibility = "hidden";
    document.getElementById('appsPanel').style.visibility = "hidden";
    document.getElementById('allSearchPanel').style.visibility = "hidden";
    document.getElementById('allCollectionsPanel').style.visibility = "hidden";
    document.getElementById('allSchoolPanel').style.visibility = "hidden";

    document.getElementById(panelName).style.visibility = "visible";
    document.getElementById('body').style.margin = "0px 0px 0px 400px";
    document.getElementById('bar').style.left = "400px";
    document.getElementById('container').style.left = "60%";
  }
  else {
    document.getElementById(panelName).style.visibility = "hidden";
    document.getElementById('body').style.margin = "0px 0px 0px 0px";
    document.getElementById('bar').style.left = "0px";

    document.getElementById('mainPanel').style.visibility = "hidden";
    document.getElementById('panelsPanel').style.visibility = "hidden";
    document.getElementById('appsPanel').style.visibility = "hidden";
    document.getElementById('allSearchPanel').style.visibility = "hidden";
    document.getElementById('allCollectionsPanel').style.visibility = "hidden";
    document.getElementById('allSchoolPanel').style.visibility = "hidden";

    document.getElementById('container').style.left = "50%";
  }
}

// TODO: stworzyć id="panel", którym zastąpić pojedyńcze id paneli
