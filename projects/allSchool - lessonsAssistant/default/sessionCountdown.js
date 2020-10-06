function sessionCountdown() {
  const date = new Date();
  var time = date.getTime();
  time = (time/1000/60/60/24).toFixed(0);
  var sessionTime = 18388 + 48 + 105 + 121;
  document.getElementById('sessionCountdown').innerHTML = (sessionTime - time).toString() + " days to the exams";
}
