// <body>
//   <p>1</p>
//   text
//   <div><p>2</p></div>
// </body>

function recSearchTags(document, tagName){
		let tagList = [];
		let htmlcode=window.document.documentElement.innerHTML;
		let from=0, to, text;
		while(true){
			from=htmlcode.indexOf("<"+tagName,from);
			if(from===-1){
				break;
			}
			to=htmlcode.indexOf(">", from);
			text=htmlcode.substring(from, to+1);
			tagList.push(text);
			from=to;
		}
	console.log(tagList);
}

recSearchTags(document, "p");
//const elements = recSearchTags(document, 'p');
// ['<p>1</p>' '<p>2</p>'] где каждый элемент это объект соответствующего типа
//console.log(elements.length); // 2
