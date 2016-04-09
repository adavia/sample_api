import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session')
        .authenticate('authenticator:devise', email, password)
        .catch((reason) => {
          this.set('responseMessage', reason.error || reason);
        });
    }
  }
});