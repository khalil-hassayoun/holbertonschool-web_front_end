function createElement (data) {
  p = document.createElement('p');
  p.innerHTML = JSON.stringify(data);
  document.body.appendChild(p);
}
function queryWikipedia (callback) {
  let x = new XMLHttpRequest();
  x.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  x.send();
  x.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     createElement(JSON.parse(x.response).query.pages["21721040"].extract);
   }
  }
}
queryWikipedia(createElement);
