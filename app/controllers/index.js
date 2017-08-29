import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: {},
  selectedItem: {},
  modalActive: false,
  actions: {
    toggleModal() {
      this.toggleProperty('modalActive');
    },
    createItem(newItem, listId) {
      if(newItem.name) {
        let thisNewItem = this.store.createRecord('item', {
          name: newItem.name,
          description: 'Click here to add a description.'
        });

        let listToAssociate = this.store.findRecord('list', listId);
        listToAssociate.then(function(list) {
          list.get('items').then(function(items) {
            items.pushObject(thisNewItem);
            items.save();
          });
        });
      }
    },
    selectItem(item) {
      this.set('selectedItem', item);
      this.toggleProperty('modalActive');
    },
    deleteItem(item) {
      let id = item.id;
      let thisItem = this.get('store').peekRecord('item', id);
      thisItem.destroyRecord();
    }
  }

});


// import Ember from 'ember';

// export default Ember.Controller.extend({

//   actions: {
//     createList() {
//       this.get('model').push({ name: "New List" });
//     }
//   }
// });
