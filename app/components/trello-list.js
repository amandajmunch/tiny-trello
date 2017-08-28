import Ember from 'ember';
const { inject } = Ember;

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
      let id = list.id;
      let listToDelete = this.get('store').peekRecord('list', id);
      listToDelete.destroyRecord();
    }
  }
});
