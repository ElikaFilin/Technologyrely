// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
<<<<<<< HEAD
function prettify(document) {
	var body = document.getElementsByTagName("body")[0];
	run_prettify(body);
}

function run_prettify(el) {
	let countChild = el.childElementCount;
	for (let i = 0; i < countChild; i++) {

		if (el.children[i].nodeName.toUpperCase() == "DIV") {
			if (el.children[i].childElementCount > 0) {
				run_prettify(el.children[i]);
			} else if (el.children[i].firstChild && el.children[i].firstChild.nodeType === 3) {
				console.log(el.children[i].nodeName);
				let elem = document.createElement('p');
				elem.innerHTML = el.children[i].innerHTML;
				el.children[i].innerHTML = '';
				el.children[i].appendChild(elem);
			}
		} else if (el.children[i].nodeName.toUpperCase() == "P") {
			continue
		}


	}
}

const elements = prettify(document);
//console.log(document.body.innerHTML);
=======
const elements = prettify(document);
console.log(document.body.innerHTML);
>>>>>>> 57e2c98fa175dc3beb740699b5abff14fa7a024f
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>