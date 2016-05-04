import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		story: '',
		author: '',
		content: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/entry',
	idAttribute: 'id'
});