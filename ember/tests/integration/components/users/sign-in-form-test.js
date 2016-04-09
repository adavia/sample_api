import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('users/sign-in-form', 'Integration | Component | users/sign in form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users/sign-in-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#users/sign-in-form}}
      template block text
    {{/users/sign-in-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
