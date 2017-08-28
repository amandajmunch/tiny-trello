import Ember from 'ember';

export default Ember.Component.extend({
  input: false,
  actions: {
    editing() {
      this.toggleProperty('input');
    },
    createItem: function(newItem, listId) {
      this.toggleProperty('input');
      this.sendAction('createItem', newItem, listId);
    }
  }
});
