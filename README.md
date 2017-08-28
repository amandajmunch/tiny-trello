# tiny-trello

This is an Ember version of Trello in small format. The user should be able to add a card to the board by clicking 'add card' and typing in the text field. To delete a card, you can click the item, a modal will pop up with the option to edit or delete the card. 

I followed along with a few tutorials such as yoember.com, which inspired me to check out Bootstrap and use it with Ember. Originally, I wanted to go with Material Design, but perhaps in the future. 

I'm used to using Flexbox, but Bootstrap allowed a great and clean grid system for each component. I especially enjoyed 'pull-right' and 'pull-left' instead of using justify-content. These were all new things for me to explore, but taught me a lot.

While it doesn't pass every test, it does function, so that is something I have to work through.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tiny-trello`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
