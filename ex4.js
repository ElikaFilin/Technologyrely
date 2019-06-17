
const Global = function (fnc){
	const cached={};
	return function(arg)
	{
		if(arg in cache){
			return cache[arg];
		}
		return cache[arg] =	fnc(arg);
	}
};