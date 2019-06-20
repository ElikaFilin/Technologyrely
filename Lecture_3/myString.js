class MyString {
  reverse(str){
  		let result = "";
  		for( let i=str.length-1;i>=0;i--){
			result = result.concat(str[i]);
		}
		return result;

  }
  ucFirst(str){
  	return str.charAt(0).toUpperCase()+str.substr(1);
  }
  ucWords(str){
  	let str_arr=str.split(" ");
  	return str_arr.map(this.ucFirst).join(" ");
  }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
