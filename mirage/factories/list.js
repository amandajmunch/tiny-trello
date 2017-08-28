import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return 'Default List';
  },
  afterCreate(list, server) {
    server.createList('item', 0, {list});
  }
});
