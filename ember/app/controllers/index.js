import Ember from 'ember';

export default Ember.Controller.extend({
  sortProp: ['created_at:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortProp'),
  filterPosts: Ember.computed.filterBy('sortedPosts', 'isNew', false)
});
