import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('galleries-listing', 'Integration | Component | galleries listing', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{galleries-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#galleries-listing}}
      template block text
    {{/galleries-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
