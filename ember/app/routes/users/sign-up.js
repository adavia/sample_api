import Ember from 'ember';  
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {  
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    saveUser(newUser) {
      newUser.save().then(() => {
        this.get('model').rollback();
      }).catch((reason) => {
        if (Array.isArray(reason.errors)) {
          let errors = {};
          reason.errors.forEach((error) => {
            errors[`error-${error.field}`] = error.messages[0];
          });
          this.controller.set('errors', errors);
        } else {
          console.log(reason)
        }
      });
    }
  }
});