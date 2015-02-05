import Ember from 'ember';

export default Ember.ArrayController.extend({
  newTodo: "",
  actions: {
    addTodo: function(){
      this.addObject({
        completed: false,
        note: {
          title: this.get('newTodo'),
          body: ''
        }
      });
      this.set('newTodo', '');
    }
  }
});
