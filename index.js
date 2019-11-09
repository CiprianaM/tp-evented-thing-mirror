
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  this._listen = {};
}

EventedThing.prototype.on = function (event,handler) {
  return handler(event);
};

EventedThing.prototype.trigger = function (event, reaction) {
  if (reaction) {
    return 'the event was '+ event + ' so the reaction should be ' + reaction;
  }
};

var instance1 = new EventedThing();
// console.log(instance1.trigger('Cipi', 'say hi'));
// console.log(instance1.on('Cipi', function (event) {
//   return 'nice to meet you, '+ event;
// }))

module.exports = new EventedThing;
