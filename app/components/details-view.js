import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  editName: false,
  editDescription: false,
  actions: {
    toggleModal() {
      this.sendAction('toggleModal');
    },
    toggleEdit(element) {
      if(element === 'name') {
        this.toggleProperty('editName');
      } else if (element === 'description') {
        this.toggleProperty('editDescription');
      }
    },
    editItemName(newItem, id) {
      if(newItem.name) {
        this.toggleProperty('editName');
        let itemToChange = this.get('store').findRecord('item', id);

        itemToChange.then(function(item) {
          item.set('name', newItem.name);
          item.save();
          this.set('newItem', {});
        });
      }
    },
    editItemDescription(newItem, id) {
      if(newItem.description) {
        this.toggleProperty('editDescription');
        let itemToChange = this.get('store').findRecord('item', id);

        itemToChange.then(function(item) {
          item.set('description', newItem.description);
          item.save();
          this.set('newItem', {});
        });
      }
    },
    deleteItem(item) {
      this.sendAction('toggleModal');
      this.sendAction('deleteItem', item);
    }
  }
});
