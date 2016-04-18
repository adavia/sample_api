import Ember from 'ember';  
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {  
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    saveUser(newUser) {
      newUser.save().then((resp) => {
        this.controller.set('model', this.store.createRecord('user'));
        this.controller.set('message', `Thank you ${resp.get('email')}! 
          Your datails have been saved successfully`);
        this.controller.set('errors', null);
      }).catch((resp) => {
        let errors = {};
        resp.errors.forEach((error) => {
          errors[`error-${error.field}`] = error.messages[0];
        });
        this.controller.set('errors', errors);  
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();

      this.controller.set('message', false);
      this.controller.set('errors', null);
    }
  }
});