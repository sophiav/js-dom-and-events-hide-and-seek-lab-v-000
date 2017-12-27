function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list li");
  
  for (let i = 0; i < lis.length; i++) {
    const newRank = parseInt(lis[i].innerHTML) + n;
    lis[i].innerHTML = newRank;
  }
}

// use RECURSION
function getChild(elem) {
  if(elem.children.length === 0) {
    return elem;
  }
  return getChild(elem.children[0]);
}

function deepestChild() {
  const grandNode = document.querySelector('div#grand-node');

  return getChild(grandNode);
}

