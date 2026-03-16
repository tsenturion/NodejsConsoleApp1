const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => {
    console.log('Hello, welcome to the event-driven programming!');
});

eventEmitter.emit('greet');