var openingCheck = 0;

function openLink(link, here = false) {
  if(here == true) {
    setTimeout(function() {
      window.open(link, '_self');
    }, 5000);
  }
  else {
    window.open(link);
  }
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

function openSite(checkedDay, checkedHour_0, checkedHour_1, link_1, link_2 = '', link_3 = '') {
  if(checkTime(checkedDay, checkedHour_0, checkedHour_1)) {
    openingCheck++;
    if(link_3 != '') {
      openLink(link_3);
    }
    if(link_2 != '') {
      openLink(link_2);
    }
    openLink(link_1, true);
  }
}

function openSites() {
  openSite(1, 12, 14, 'https://moodle1.cs.pollub.pl/course/view.php?id=794');
  openSite(1, 14, 16, 'https://moodle1.cs.pollub.pl/course/view.php?id=750');
  openSite(1, 16, 18, 'https://moodle1.cs.pollub.pl/course/view.php?id=808');
  openSite(1, 18, 20, 'https://moodle1.cs.pollub.pl/course/view.php?id=551');

  openSite(2, 16, 18, 'https://moodle1.cs.pollub.pl/course/view.php?id=1040');

  openSite(3, 8, 10, 'https://moodle1.cs.pollub.pl/course/view.php?id=747');
  openSite(3, 10, 12, 'https://moodle1.cs.pollub.pl/course/view.php?id=841', 'https://classroom.google.com/u/3/c/NzcxOTg5MjI0MDZa?hl=pl');
  openSite(3, 12, 14, 'https://moodle1.cs.pollub.pl/course/view.php?id=749');

  openSite(4, 8, 10, 'https://moodle1.cs.pollub.pl/course/view.php?id=749');
  openSite(4, 10, 12, 'https://classroom.google.com/u/3/c/OTE2OTM2ODAzMTVa?hl=pl');
  openSite(4, 14, 16, 'https://moodle1.cs.pollub.pl/course/view.php?id=748');

  openSite(5, 8, 10, 'https://moodle1.cs.pollub.pl/course/view.php?id=821');
  openSite(5, 11, 14, 'https://moodle1.cs.pollub.pl/course/view.php?id=354');

  if(openingCheck == 0) {
    var mLink = 'https://moodle1.cs.pollub.pl/my/';
    openLink(mLink);
  }
}
