const map = (array, fn) => {
	const array1 = new Array();
	for (let i = 0; i < array.length; i++) {
		array1[i] = fn(array[i], i, array);
	}
	return array1;
};

const array = [1, 2, 3];

const callbackFn = (item, index, arr) => {
	return item * index;
};

const processedArray = map(array, callbackFn);

console.log(processedArray); // должно вывести каждый элемент умноженный на его индекс [0, 2, 6]
