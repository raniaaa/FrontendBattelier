angular.module('starter.services', [])

.factory('events', function() {
  // Might use a resource here that returns a JSON array


  var events =
    { "id":1,
    "start_time": "2010-01-01T04:04:00+01:00",
    "end_time": "2010-01-01T04:05:00+01:00",
     "Type": "Color",
     "content": "096A09",
     "comment": "."};


  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(id) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(id)) {
          return events[i];
        }
      }
      return null;
    }

  };
})
.factory('Tockens', function(){
  var checkTocken = function(id){
    var exist = true;

    return exist;
  };


  return{
    checkTocken: checkTocken,

  }
});
