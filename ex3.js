
const makeDiscount = (percent) => {
	return function sale(prise){
		return prise*(1-(percent/100));
	};
};
