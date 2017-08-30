import Ember from 'ember';
// selecting an item
export default Ember.Component.extend({
  actions: {
    selectItem(item) {
      this.sendAction('selectItem', item);
    }
  }
});


