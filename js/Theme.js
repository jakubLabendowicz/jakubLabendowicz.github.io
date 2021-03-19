var light = new Theme("Jasny");
light.add("--firstBackgroundColor", "white");
light.add("--firstColor", "black");
light.add("--shadowColor", "#DDDDDD");

var dark = new Theme("Ciemny");
dark.add("--firstBackgroundColor", "#111111");
dark.add("--firstColor", "white");
dark.add("--shadowColor", "black");

var themeSwitch = new ThemeSwitch("Switch", "themeStatus");
themeSwitch.add(light);
themeSwitch.add(dark);

themeSwitch.addSchedule(0, 8.00, 19.59);
themeSwitch.addSchedule(1, 20.00, 7.59);


$(document).ready(function(){
  $("#themeStatus").on("click", function(){
    themeSwitch.show();
  });
});
