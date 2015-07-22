import Ember from 'ember';
import {saveTodo} from '../models/local-storage-access';

export default Ember.ObjectController.extend({
  actions: {
    updateTodo: function(){
      saveTodo(this.get('model'));
    }
  }
});
