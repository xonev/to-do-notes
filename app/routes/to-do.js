import Ember from 'ember';
import {fetchTodo} from '../models/local-storage-access';

export default Ember.Route.extend({
  model: function(params){
    return fetchTodo(params.id);
  }
});
