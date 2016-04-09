import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    register(params) {
      this.sendAction('action', params);
    }
  }
});
