function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested, div.target");
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list')
 
for (let i = 0; i < lis.length; i++) {
  return parseInt(lis[i])+n;
}
}