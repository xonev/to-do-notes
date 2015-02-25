import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      id: '90b38d87-6bf6-4d07-b3a4-c10dde2000dc',
      complete: false,
      priority: 1,
      note: {
        title: "Finish this to-DO app",
        body: ""
      }
    }, {
      id: '6c799431-fc36-4901-87c8-5692f1f9c399',
      complete: true,
      priority: 2,
      note: {
        title: "Try implementing a clojurescript client",
        body: ""
      }
    }];
  }

});
