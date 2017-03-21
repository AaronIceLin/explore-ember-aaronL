import Ember from 'ember';


export default Ember.Route.extend({

  model(){

    //Filter
    // return this.get('store').filter('task',{},function(task) {
    //   return task.get('isDone') === false;
    // });

    return this.get('store').findAll('task');

  },

});
