import Backbone from 'backbone';
import Entry from './../models/EntryModel.js';

const EntryCollection = Backbone.Collection.extend({
	model: Entry,
	url: '/api/v1/entry',
	comparator: 'order'
});

export default new EntryCollection();