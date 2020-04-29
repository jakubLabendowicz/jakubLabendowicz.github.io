var openingCheck = 0;

function openLink(link) {
  window.open(link, '_self');
}

function checkTime(checkedDay, checkedHour_0, checkedHour_1) {
  const date = new Date();
  var hour = date.getHours();
  var day = date.getDay();



  if(day == checkedDay && hour >= checkedHour_0 && hour < checkedHour_1) {
    console.log(day + " | " + hour);
    return true;
  }
  else {
    return false;
  }
}

function openSite(checkedDay, checkedHour_0, checkedHour_1, link_1, link_2 = '') {
  if(checkTime(checkedDay, checkedHour_0, checkedHour_1)) {
    openingCheck++;
    openLink(link_1);
    if(link_2 != '') {
      openLink(link_2);
    }
  }
}

function openSites() {
  openSite(3, 8, 10, 'https://moodle1.cs.pollub.pl/course/view.php?id=747');
  openSite(3, 10, 12, 'https://moodle1.cs.pollub.pl/course/view.php?id=841', 'https://classroom.google.com/u/3/c/NzcxOTg5MjI0MDZa?hl=pl');
  openSite(3, 12, 14, 'https://moodle1.cs.pollub.pl/course/view.php?id=749');

  if(openingCheck == 0) {
    var mLink = 'https://moodle1.cs.pollub.pl/my/';
    openLink(mLink);
  }
}
