/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function debounce(callback, time) {
	return function (args) {
		let previousCall = this.lastCall;
		this.lastCall = Date.now();
		if (previousCall && ((this.lastCall - previousCall) <= time)) {
			clearTimeout(this.lastCallTimer);
		}
		this.lastCallTimer = setTimeout(() => callback(args), time);
	}
}
let log = (args) => console.log(`My args are ${args}`);
let debouncedLog = debounce(log, 2000);
debouncedLog([1, 2, 3]);
debouncedLog([4, 5, 6]);
debouncedLog([7, 8, 9]);

