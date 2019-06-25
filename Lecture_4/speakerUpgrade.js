// function Speaker(name, verb) {
//   this.name = name;
//   this.verb = verb || 'says';
// }

class Speaker {

    constructor(name, verb) {
        this.name = name;
        this.verb = verb || 'says';
    }
    get verb(){
        return this.verb;
    }

    speak(text) {
        console.log(this.name + ' ' + this.verb + ' \'' + text + '\'');
    };
}

// Speaker.prototype.speak = function (text) {
//   console.log(this.name + ' ' + this.verb + ' \'' + text + '\'');
// };

// function Shouter(name) {
//   Speaker.call(this, name, 'shouts')
// }
class Shouter extends Speaker {
    constructor(name) {
        super(name, 'shouts');
    }

    speak(text) {
        super.speak(text.toUpperCase());

    }

}

// Shouter.prototype = Object.create(Speaker.prototype);
// Shouter.prototype.speak = function (text) {
//   Speaker.prototype.speak.call(this, text.toUpperCase());
// };

new Shouter('Dr. Loudmouth').speak('hello there');
