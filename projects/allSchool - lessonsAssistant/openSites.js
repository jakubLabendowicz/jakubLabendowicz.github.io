var openingCheck = 0;

function openLink(link, here = false) {
  if(here == true) {
    window.open(link, '_self');
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
    return true;
  }
  else {
    return false;
  }
}

function openSite(checkedDay, checkedHour_0, checkedHour_1, link, here = false) {
  if(checkTime(checkedDay, checkedHour_0, checkedHour_1)) {
    openingCheck++;
    openLink(link, here);
  }
}

function openFirstLink() {
  //Poniedziałek
  openSite(1, 8, 10, 'https://teams.microsoft.com/l/team/19%3a92ef024f5572438eab0968e5455cbb71%40thread.tacv2/conversations?groupId=9429e9d5-452e-4611-915a-d70d97b4d618&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  openSite(1, 10, 12, 'https://teams.microsoft.com/l/team/19%3abbce6452d6434569b2d5eda0e25e6530%40thread.tacv2/conversations?groupId=9d35e1bd-420a-4fdc-8e5b-d87630c48cbc&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  openSite(1, 18, 20, 'https://teams.microsoft.com/l/team/19%3a8c94662d27c345798edf01f08e714400%40thread.tacv2/conversations?groupId=25f1c02d-5a72-4f23-820f-c4bcc99ec020&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  //Wtorek
  openSite(2, 10, 12, '');
  openSite(2, 12, 14, '');
  openSite(2, 16, 18, 'https://teams.microsoft.com/l/team/19%3ae5d895f1f7564a51b9485827b9339e05%40thread.tacv2/conversations?groupId=69c38904-fa86-48c8-a61c-18bace725af3&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  openSite(2, 18, 20, 'https://teams.microsoft.com/l/channel/19%3a52d8bb3c66fa436b8612aa730f639722%40thread.tacv2/Og%25C3%25B3lny?groupId=bef6ec60-1996-4fab-ab3b-6ccdb9f758e4&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  //Środa
  openSite(3, 8, 10, '');
  openSite(3, 10, 12, '');
  openSite(3, 12, 14, 'https://teams.microsoft.com/l/team/19%3a13bf774bf743454aa7b6cbdd90fbefb9%40thread.tacv2/conversations?groupId=2cf05332-9198-479a-9eeb-8dbd9f01bc36&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  openSite(3, 16, 18, 'https://teams.microsoft.com/l/team/19%3a4883b2f83090487c8ee71a3ef2431b55%40thread.tacv2/conversations?groupId=6d99993b-4c63-4d93-a0d8-3046ad4e04af&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
  openSite(3, 18, 20, '');
  //Piatek
  openSite(5, 8, 10, '');
  openSite(5, 10, 12, '');
  openSite(5, 12, 14, '');
  openSite(5, 18, 20, 'https://teams.microsoft.com/l/team/19%3a2deea6793f5a48199f92efcecfb86844%40thread.tacv2/conversations?groupId=4a624bd3-8f3f-4399-9c2f-2040a970b039&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8');
}

function openSecondLink() {
  //Poniedziałek
  openSite(1, 8, 10, '');
  openSite(1, 10, 12, '');
  openSite(1, 18, 20, '');
  //Wtorek
  openSite(2, 10, 12, '');
  openSite(2, 12, 14, '');
  openSite(2, 16, 18, '');
  openSite(2, 18, 20, '');
  //Środa
  openSite(3, 8, 10, '');
  openSite(3, 10, 12, '');
  openSite(3, 12, 14, '');
  openSite(3, 16, 18, '');
  openSite(3, 18, 20, '');
  //Piatek
  openSite(5, 8, 10, '');
  openSite(5, 10, 12, '');
  openSite(5, 12, 14, '');
  openSite(5, 18, 20, '');

  if(openingCheck == 0) {
    openLink('https://moodle3.cs.pollub.pl/course/index.php?categoryid=23');
  }
}

function openSites() {
  openFirstLink();
  openSecondLink();
}
