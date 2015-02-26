import Ember from 'ember';
import {fetch} from '../models/local-storage-access';

export default Ember.Route.extend({
  model: function() {
    return fetch('to-dos', []);
  }
});
