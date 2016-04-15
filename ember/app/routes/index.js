import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    let data = {
      posts: this.store.findAll('post'),
      post: this.store.createRecord('post')
    };

    return Ember.RSVP.hash(data);
  },

  setupController(controller, model) {
    controller.set("posts", model.posts);
    controller.set("post", model.post);
  },

  actions: {
    savePost(newPost) {
      newPost.save().then((resp) => {
        this.controller.set('post', this.store.createRecord('post'));
      }).catch((resp) => {
        let errors = {};
        resp.errors.forEach((error) => {
          errors[`error-${error.field}`] = error.messages[0];
        });
        this.controller.set('errors', errors);
      });
    },

    willTransition() {
      this.controller.get('post').rollbackAttributes();
      this.controller.set('errors', []);
    }
  }
});
