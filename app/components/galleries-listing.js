import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    /***
     * Toggle Image size boolean value
     */
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
