import Backbone from 'backbone';
import Entry from './../models/EntryModel.js';

export default new Backbone.Collection.extend({
	model: Entry,
	url: '/api/v1/entry'
});