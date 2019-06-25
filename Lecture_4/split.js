function split(string, separator, limit) {
    let index = string.indexOf(separator);

    let res = [];
    if (index !== -1) {
        res.push(string.substring(0, index));
    }

    while (index != -1) {
        index++;
        let next_index = string.indexOf(separator, index);
        if (next_index != -1) {
            res.push(string.substring(index, next_index));
        }
        index = next_index;
    }
    return res;
}


const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

console.log(split(string, ' '));
