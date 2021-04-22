var light = new Theme("Light");
light.add("--mainBackgroundColor", "#ffffff");
light.add("--cardHeaderColor", "#000000");
light.add("--cardTextColor", "#616161");
light.add("--cardTextHoverColor", "#000000");
light.add("--projectShadowColor", "#00000029");
light.add("--CVBackgroundColor", "#fafafa");
light.add("--GHImage", "url('../graphics/GitHub-Mark-120px-plus.png')");

// var dimmed = new Theme("Dimmed");
// dimmed.add("--mainBackgroundColor", "#ffffff");
// dimmed.add("--cardHeaderColor", "#000000");
// dimmed.add("--cardTextColor", "#616161");
// dimmed.add("--cardTextHoverColor", "#000000");
// dimmed.add("--projectShadowColor", "#00000029");
// dimmed.add("--CVBackgroundColor", "#fafafa");
//dimmed.add("--GHImage", "url('../graphics/GitHub-Mark-120px-plus.png')");

var dark = new Theme("Dark");
dark.add("--mainBackgroundColor", "#212121");
dark.add("--cardHeaderColor", "#ffffff");
dark.add("--cardTextColor", "#eeeeee");
dark.add("--cardTextHoverColor", "#ffffff");
dark.add("--projectShadowColor", "#000000");
dark.add("--CVBackgroundColor", "#1a1a1a");
dark.add("--GHImage", "url('../graphics/GitHub-Mark-Light-64px.png')");

var themeController = new ThemeController("themeController");
themeController.addTheme(light);
// themeController.addTheme(dimmed);
themeController.addTheme(dark);

themeController.addButton("themebutton");
// themeController.addButton("themebutton2");
themeController.addStatus("themebutton");

// document.getElementById("defaultThemeSetter2").addEventListener('click',function () {themeController.synchronizeLocalTheme()});

themeController.run();
