import DS from 'ember-data';

export default DS.Model.extend({
  taskId: DS.attr('string'),
  description: DS.attr(),
  deadline: DS.attr('string'),
  isDone: DS.attr('boolean')
});
