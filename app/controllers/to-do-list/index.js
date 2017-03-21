import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['completion'],
  completion: null,

  sortByDeadline:['deadline'],

  filterCompletion: Ember.computed( 'model.@each.isDone', 'completion', function() {
    var tasks = this.get('model');
    var isCompleted = this.get('completion');

    var ifShow = false;

    if(isCompleted ==='1'){
      ifShow = true;
    }else if(isCompleted ==='0'){
      ifShow = false;
    }

    if(isCompleted!=null){
      return tasks.filterBy('isDone',ifShow);
    }
    else{
      return tasks;
    }
  }),

  sortFilteredResults: Ember.computed.sort('filterCompletion','sortByDeadline'),

  actions: {
    /***
     * Show all tasks
     */
    showAll() {
      this.set('completion', null);
    },

    /**
     * Show complete tasks
     */
    showCompleted() {
      this.set('completion', 1);
    },

    /***
     * Show incomplete tasks
     */
    showIncomplete() {
      this.set('completion', 0);
    },

    /***
     * Go to Edit task page
     * @param task
     */
    editTask(task) {
      this.transitionToRoute('to-do-list.edit', task.get('id'));
    },

    /***
     * Add task
     * @param description
     * @param deadline
     */
    addTask(description, deadline) {

      //Check non empty input box
      if(description === undefined || deadline===undefined || deadline ===''){
        alert("Please enter valid input!!!");
        return;
      }

      this.get('store').createRecord('task', {
        description,
        deadline
      }).save();

      //Clear up input box
      this.set('deadlineInput',undefined);
      this.set('descriptionInput',undefined);
    },

    /***
     * Delete task button and transfer to to do list index
     * @param task
     */
    delete(task) {
      task.deleteRecord();
      task.save();
      this.transitionToRoute("to-do-list");
    },

    /***
     * Check or Uncheck task completion
     * @param task
     */
    toggleTask(task) {
      let isDone = task.get('isDone');
      task.set('isDone', !isDone);
      task.save();
    }
  }
});
