import { moduleFor, test } from 'ember-qunit';

moduleFor('route:to-do-list/incompleted', 'Unit | Route | to do list/incompleted', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
