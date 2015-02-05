import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      complete: false,
      note: {
        title: "Finish this to-DO app",
        body: ""
      }
    }, {
      complete: true,
      note: {
        title: "Try implementing a clojurescript client",
        body: ""
      }
    }];
  }

});
