import Ember from 'ember';
// toggling input field if adding a new item to a list
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
