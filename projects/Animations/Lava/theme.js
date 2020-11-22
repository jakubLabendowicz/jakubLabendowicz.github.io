var mode = 0;

function brithnes() {
  if (mode == 0) {
    document.body.style.backgroundColor = "black";
    document.documentElement.style.setProperty('--panelColor', 'white');
    document.documentElement.style.setProperty('--panelBackgroundColor', 'black');
    document.documentElement.style.setProperty('--bodyColor', 'white');
    document.documentElement.style.setProperty('--bodyBackgroundColor', 'black');


    document.getElementById('logo').style.backgroundImage = "url('JŁ!-2.png')";
    document.getElementById('menu').style.backgroundImage = "url('menu-1.png')";
    mode = 1;
  }
  else {
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty('--panelColor', 'black');
    document.documentElement.style.setProperty('--panelBackgroundColor', 'white');
    document.documentElement.style.setProperty('--bodyColor', 'black');
    document.documentElement.style.setProperty('--bodyBackgroundColor', 'white');
    document.getElementById('logo').style.backgroundImage = "url('JŁ!.png')";
    document.getElementById('menu').style.backgroundImage = "url('menu.png')";
    mode = 0;
  }
}
