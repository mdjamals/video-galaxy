/**
 * Basic event emitter to publish and subscribe events
 */
export default class BasicEventEmitter {
    constructor(){
        this.events = {};
    }

    /**
     * Method to subscribe event
     * @param {*} eventName string
     * @param {*} fn callback method
     */
    subscribe(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    /**
     * Unsubscribe registred event
     * @param {*} eventName string
     * @param {*} fn method
     */
    unSubscribe(eventName, fn) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    /**
     * Emit event and publish notifications
     * @param {*} eventName string
     * @param {*} data parameter to pass into callback event method
     */
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                if(fn.constructor && fn.constructor.name === 'AsyncFunction') {
                    (
                        async () => {
                            await fn(data);
                        }
                    )();
                } else {
                    fn(data);
                }
            });
        }
    }
}