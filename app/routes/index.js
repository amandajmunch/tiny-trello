import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('list');
  }
});



// import Ember from 'ember';

// export default Ember.Route.extend({
//   model() {
//     return [
//       {
//         "id": 1,
//         "title": "Favorite Beers",
//         "cards": [
//           {
//             "id": 1,
//             "title": "Super Spruce",
//             "list_id": 1,
//             "description": "Grimm Artisanal Ales"
//           },
//           {
//             "id": 2,
//             "title": "Haze",
//             "list_id": 1,
//             "description": "Tree House Brewing Company"
//           },
//           {
//             "id": 3,
//             "title": "Swish",
//             "list_id": 1,
//             "description": "Bissell Brothers"
//           },
//           {
//             "id": 4,
//             "title": "Sumi Ink",
//             "list_id": 1,
//             "description": "Grimm Artisanal Ales"
//           },
//           {
//             "id": 5,
//             "title": "Saison Mélange No. 3",
//             "list_id": 1,
//             "description": "de Garde Brewing"
//           }
//         ]
//       },
//       {
//         "id": 2,
//         "title": "Top TV Shows",
//         "cards": [
//           {
//             "id": 1,
//             "title": "Rick & Morty",
//             "list_id": 2,
//             "description": "Just started it but it is already becoming a favorite"
//           },
//           {
//             "id": 2,
//             "title": "Game of Thrones",
//             "list_id": 2,
//             "description": ""
//           },
//            {
//             "id": 3,
//             "title": "Arrested Development",
//             "list_id": 2,
//             "description": "Such a classic"
//           },
//           {
//             "id": 3,
//             "title": "It's Always Sunny in Philadelphia",
//             "list_id": 2,
//             "description": "A necessary watch"
//           }
//         ]
//       }
//     ]
//   }
// });


