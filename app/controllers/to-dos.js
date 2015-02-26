import Ember from 'ember';
import uuid from '../helpers/id-generator';
import {save} from '../models/local-storage-access';

export default Ember.ArrayController.extend({
  newTodo: "",
  actions: {
    addTodo: function(){
      var todo = {
        id: uuid(),
        priority: this.length,
        completed: false,
        note: {
          title: this.get('newTodo'),
          body: ''
        }
      };
      this.addObject(todo);
      save('to-dos', this.sortBy('priority'));
      this.set('newTodo', '');
    }
  }
});
