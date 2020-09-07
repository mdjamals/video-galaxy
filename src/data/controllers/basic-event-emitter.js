/**
 * Basic event emitter to publish and subscribe events
 */
export default class BasicEventEmitter {
    constructor(){
        this.events = {};
    }

    subscribe(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    unSubscribe(eventName, fn) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                if(fn instanceof AsyncFunction === true) {
                    console.log('async function found');
                } else {
                    fn(data);
                }
            });
        }
    }
}