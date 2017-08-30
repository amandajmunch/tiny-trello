import Ember from 'ember';
const { inject } = Ember;
// creating an item on a list or deleting a list
export default Ember.Component.extend({
  store: inject.service(),
  actions: {
    createItem: function(newItem, listId) {
      this.sendAction('createItem', newItem, listId);
    },
    selectItem(item) {
      this.sendAction('selectItem', item);
    },
    deleteList: function(list) {
      let listToDelete = this.get('store').peekRecord('list', list.id);
      listToDelete.destroyRecord();
    }
  }
});
