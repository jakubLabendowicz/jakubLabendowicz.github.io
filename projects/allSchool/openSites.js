class Subject {
  constructor(name, day, start, end, firstLink, secondLink='', thirdLink='') {
    this.name = name;
    this.day = day;
    this.start = start;
    this.end = end;
    this.firstLink = firstLink;
    this.secondLink = secondLink;
    this.thirdLink = thirdLink;
  }

  openSite(site) {
    const date = new Date();
    var hour = date.getHours();
    var day = date.getDay();

    if(day == this.day && hour >= this.start && hour < this.end) {
      if ((site==1 || site==0) && !this.firstLink=="") {
        window.open(this.firstLink);
      }
      if ((site==2 || site==0) && !this.secondLink=="") {
        window.open(this.secondLink);
      }
      if ((site==3 || site==0) && !this.thirdLink=="") {
        window.open(this.thirdLink);
      }
    }
  }

  viewName() {
    const date = new Date();
    var hour = date.getHours();
    var day = date.getDay();

    if(day == this.day && hour >= this.start && hour < this.end && !this.name=='') {
      document.getElementById('subject').innerHTML = this.name;
      document.getElementById('presentLesson').style.visibility = "visible";
      document.getElementById('presentLesson').style.height = "auto";
    }
  }
}

Subjects = new Array();
Subjects[0]= new Subject('Matematyka dla informatyków II', 1, 8, 10, 'https://teams.microsoft.com/l/team/19%3a92ef024f5572438eab0968e5455cbb71%40thread.tacv2/conversations?groupId=9429e9d5-452e-4611-915a-d70d97b4d618&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=324');
Subjects[1]= new Subject('Algorytmy analizy numerycznej', 1, 10, 12, 'https://teams.microsoft.com/l/team/19%3abbce6452d6434569b2d5eda0e25e6530%40thread.tacv2/conversations?groupId=9d35e1bd-420a-4fdc-8e5b-d87630c48cbc&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=379');
Subjects[2]= new Subject('Metrologia', 1, 18, 20, 'https://teams.microsoft.com/l/team/19%3a8c94662d27c345798edf01f08e714400%40thread.tacv2/conversations?groupId=25f1c02d-5a72-4f23-820f-c4bcc99ec020&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=304');

Subjects[3]= new Subject('Programowanie obiektowe w Java', 2, 10, 12, 'https://teams.microsoft.com/l/team/19%3af8e12c4061684a1bb89f83118a8a5ea3%40thread.tacv2/conversations?groupId=0bfe4905-6637-4133-a63c-b6c30dd7d5fd&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=60');
Subjects[4]= new Subject('Architektura komputerów i programowanie niskopoziomowe', 2, 12, 14, 'https://teams.microsoft.com/l/team/19%3af5e4d71945fa45289ed4abc706c21b66%40thread.tacv2/conversations?groupId=724bd13b-f889-4df8-aecc-1b79997c9383&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', '');
Subjects[5]= new Subject('Programowanie obiektowe w Java', 2, 14, 16, 'https://teams.microsoft.com/l/team/19%3ae5d895f1f7564a51b9485827b9339e05%40thread.tacv2/conversations?groupId=69c38904-fa86-48c8-a61c-18bace725af3&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=376#section-0');
Subjects[6]= new Subject('Podstawy elektrotechniki i elektroniki', 2, 16, 19, 'https://teams.microsoft.com/l/channel/19%3a52d8bb3c66fa436b8612aa730f639722%40thread.tacv2/Og%25C3%25B3lny?groupId=bef6ec60-1996-4fab-ab3b-6ccdb9f758e4&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=338');

Subjects[7]= new Subject('Matematyka dla informatyków II', 3, 8, 10, 'https://teams.microsoft.com/l/team/19%3a34f0e6c365eb4ef4afa2a42e93896f66%40thread.tacv2/conversations?groupId=76710bbb-a66a-42c9-9504-4d62b0b6129b&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', '');
Subjects[8]= new Subject('Wychowanie fizyczne I', 3, 10, 12, 'https://teams.microsoft.com/l/team/19%3ad852e21d3f854f2ea8bebc4b7d3567dd%40thread.tacv2/conversations?groupId=80b3f6d7-9438-44dd-a279-fb91bb9ed92f&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', '');
Subjects[9]= new Subject('Wprowadzenie do systemów baz danych', 3, 12, 14, 'https://teams.microsoft.com/l/team/19%3a13bf774bf743454aa7b6cbdd90fbefb9%40thread.tacv2/conversations?groupId=2cf05332-9198-479a-9eeb-8dbd9f01bc36&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=182');
Subjects[10]= new Subject('Algorytmy analizy numerycznej', 3, 16, 18, 'https://teams.microsoft.com/l/team/19%3a4883b2f83090487c8ee71a3ef2431b55%40thread.tacv2/conversations?groupId=6d99993b-4c63-4d93-a0d8-3046ad4e04af&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', 'https://moodle3.cs.pollub.pl/course/view.php?id=331');
Subjects[11]= new Subject('Wprowadzenie do systemów baz danych', 3, 18, 20, '', '');

Subjects[12]= new Subject('Architektura komputerów i programowanie niskopoziomowe', 5, 8, 10, '', '');
Subjects[13]= new Subject('Podstawy elektrotechniki i elektroniki', 5, 10, 12, '', '');
Subjects[14]= new Subject('Język angielski I ', 5, 12, 14, '', '');
Subjects[15]= new Subject('Metrologia', 5, 18, 20, 'https://teams.microsoft.com/l/team/19%3a2deea6793f5a48199f92efcecfb86844%40thread.tacv2/conversations?groupId=4a624bd3-8f3f-4399-9c2f-2040a970b039&tenantId=dbb41d7a-0043-4ee2-9843-6e4ff66cc9c8', '');


function openFirstLink() {
  for(i = 0; i<=Subjects.length; i++) {
    Subjects[i].openSite(1);
  }
}

function openSecondLink() {
  for(i = 0; i<=Subjects.length; i++) {
    Subjects[i].openSite(2);
  }
}

function openThirdLink() {
  for(i = 0; i<=Subjects.length; i++) {
    Subjects[i].openSite(3);
  }
}

function openSites() {
  for(i = 0; i<=Subjects.length; i++) {
    Subjects[i].openSite(0);
  }
}

function setSubjects() {
  for(i = 0; i<=15; i++) {
    Subjects[i].viewName();
  }
}
