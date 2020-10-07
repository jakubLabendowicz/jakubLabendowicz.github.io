function clock() {
  const date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  document.getElementById('clock').innerHTML = hour + " : " + minute + " : " + second;
  document.getElementById('date').innerHTML = (day).toString() + "." + (month).toString() + "." + (year).toString();
  setTimeOut("clock()", 1000);
}
