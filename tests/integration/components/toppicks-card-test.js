import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('toppicks-card', 'Integration | Component | toppicks card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{toppicks-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#toppicks-card}}
      template block text
    {{/toppicks-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
