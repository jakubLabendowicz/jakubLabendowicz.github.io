var light = new Theme("Jasny");
light.add("--firstBackgroundColor", "white");
light.add("--firstColor", "black");
light.add("--shadowColor", "#DDDDDD");

var dark = new Theme("Ciemny");
dark.add("--firstBackgroundColor", "#111111");
dark.add("--firstColor", "white");
dark.add("--shadowColor", "black");

var themeController = new ThemeController();
themeController.add(light);
themeController.add(dark);

themeController.addButton("themeStatus");
themeController.addStatus("themeStatus");

themeController.addSchedule(0, 8.00, 19.59);
themeController.addSchedule(1, 20.00, 7.59);

document.getElementById("themeStatus").addEventListener('click',function () {themeController.show()});
