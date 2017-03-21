import Ember from 'ember';

export default Ember.Controller.extend({
  option: 'All',
  options: Ember.String.w('All Award Location Photographer'),
  filter: '',
  filterText: '',

  /**
   * List of photos results
   */
  listResults: Ember.computed( 'model', 'option.@each','filter', function() {
    return this.get('model');
  }),

  /**
   * Set filter placeholder text
   */
  filterPlaceHolderText: Ember.computed( 'model', 'option.@each','filter', function() {

    if(this.get('option') === 'All'){
      return 'Filter by Photographer, Award, Location...';
    }
    else if(this.get('option') === 'Award'){
      return 'Filter by Gold, Silver or Bronze...';
    }else{
      return 'Filter by ' + this.get('option');
    }
  }),

  /***
   * Wait 0.5 seconds when type in the filter
   */
  onFilterTextChange: function() {
    // wait 0.5 second before applying the filter
    Ember.run.debounce(this, this.applyFilter, 500);
  }.observes('filterText'),

  /***
   * Trigger filter when text is typed
   */
  applyFilter: function() {
    this.actions.handleFilterEntryInController(this);
    this.set('filter', this.get('filterText'));
  },

  actions: {

    /**
     * Select which options to filter default to All option
     * @param filterOptions
     */
    selectFilter(filterOptions) {
      this.set('filterText','');
      this.set('option', filterOptions);
      this.set('listResults',this.get('model'));
    },

    /**
     * Query model results by type
     * @param param
     * @param optionLocal
     * @param storeLocal
     * @returns {*|Promise}
     */
    filterByOptions(param,optionLocal,storeLocal){
      if (param !== '') {
        if (optionLocal === 'Location') {
          return storeLocal.query('photo', {location: param});
        }else if(optionLocal === 'Photographer'){
          return storeLocal.query('photo', {photographer: param});
        }else if(optionLocal === 'Award'){
          return storeLocal.query('photo', {award: param});
        }else if(optionLocal === 'All'){
          return storeLocal.query('photo', {all: param});
        }
      } else {
        return storeLocal.findAll('photo');
      }
    },

    /***
     * Hanlder for options filter
     * @param controller
     */
    handleFilterEntryInController(controller) {
      let filterInputValue = controller.get('filterText');
      console.log(filterInputValue);
      let filterAction = controller.actions.filterByOptions;
      filterAction(filterInputValue,controller.get('option'),controller.get('store'))
        .then((filterResults) => controller.set('listResults', filterResults));
    }
  }
});
