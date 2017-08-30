import Ember from 'ember';
const { inject } = Ember;
// creating a new list and if a name is inputed, save it into the record
export default Ember.Component.extend({
  store: inject.service(),
  actions: {
    createList(newList) {
      if(newList.name) {
        let list = this.get('store').createRecord('list', {
          name: newList.name
        });
        list.save();
      } else {
        alert('type in a name please');
      }
    }
  }
});
