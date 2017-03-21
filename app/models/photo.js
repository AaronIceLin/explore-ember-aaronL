import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  rating: DS.attr(),
  location: DS.attr(),
  award: DS.attr(),
  photographer: DS.attr(),
  description: DS.attr()
});
