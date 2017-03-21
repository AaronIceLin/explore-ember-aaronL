import Ember from 'ember';

export default Ember.Controller.extend({
  taskController: Ember.computed.alias('model'),

  actions: {
    /***
     * Save task editor
     * @param model
     * @param descriptionInput
     * @param deadlineInput
     */
    saveEdit(model, descriptionInput, deadlineInput) {

      //Check if input box is empty and assign default value
      if( deadlineInput===undefined || deadlineInput ===''){
        deadlineInput = model.get('deadline');
      }
      if(descriptionInput === undefined || descriptionInput===''){
        descriptionInput = model.get('description');
      }

      //Save new input to model
      model.setProperties( {
        description: descriptionInput,
        deadline: deadlineInput
      });
      model.save();

      //Clear up input box
      //Transfer to to do list index page
      this.set('descriptionInput',undefined);
      this.set('deadlineInput',undefined);
      this.transitionToRoute('to-do-list');
    },

    /***
     * Close task edit page and transfer to to do list index page
     */
    closeEdit(){
      this.set('descriptionInput',undefined);
      this.set('deadlineInput',undefined);
      this.transitionToRoute('to-do-list');
    }
  }
});
