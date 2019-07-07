function _get(url, callback) {
  var x = new XMLHttpRequest();
  console.log(x);
  x.onreadystatechange = function() {
    if (x.readyState === 4) {
      callback(x.responseText);
    }
  };
  x.open("GET", url);
  x.send();
}

let ownFetch = url => {
  console.log(url);
  return new Promise((resolve, reject) => {
    try{
      _get(url, resolve);
    }
    catch(e){
      reject(e);
    }
  });
};

ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(console.log)
    .catch(err => console.log(err));