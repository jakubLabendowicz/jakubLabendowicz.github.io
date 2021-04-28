function viewRepos() {
  fetch("https://api.github.com/users/jakubLabendowicz/repos")
    .then(res => res.json())
    .then(res => {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].name + "\n" + res[i].html_url + "\n" + "https://labendowicz.pl/" + res[i].name);
      }
    })
}

viewRepos();
