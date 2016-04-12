import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  message: false,
  isProcessing: false,

  actions: {
    authenticate() {
      this.set('isProcessing', true);

      let { email, password } = this.getProperties('email', 'password');
      this.get('session')
        .authenticate('authenticator:devise', email, password).then(() => {
          this.set('isProcessing', false);
        }).catch((reason) => {
          this.set('isProcessing', false);
          this.set('message', reason.error || reason);
        });
    }
  }
});